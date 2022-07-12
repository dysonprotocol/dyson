import re
import tldextract
import base64
import simplejson as json

import http.client
from io import BytesIO
import requests
from os.path import abspath, dirname, join
import os

import django
from django.conf import settings
from django.urls import re_path
from django.shortcuts import redirect

from utils import get_txt_records

# SETTINGS
BASE_DIR = dirname(abspath(__file__))
DEBUG = True
DEBUG = bool(os.environ.get("DEBUG", None))
ROOT_URLCONF = "mini_api"  # this module
ALLOWED_HOSTS = "*"
DATABASES = {"default": {}}
SECRET_KEY = "not so secret"
INSTALLED_APPS = (
    "django.contrib.staticfiles",
    "django.contrib.contenttypes",
    "django.contrib.auth",
    "rest_framework",
    "django_hosts",
)
MIDDLEWARE = (
    "django_hosts.middleware.HostsRequestMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.middleware.http.ConditionalGetMiddleware",
    "django.middleware.common.CommonMiddleware",  # should be after func_urls_middleware so APPEND_SLASH works
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django_hosts.middleware.HostsResponseMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
)
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            BASE_DIR,
            join(BASE_DIR, "vue/dist/"),
        ],
        "APP_DIRS": True,
    }
]

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
        },
    },
    "root": {
        "handlers": ["console"],
        "level": "WARNING",
    },
}


DYSON_RESTHOST = os.environ.get("DYSON_RESTHOST", "http://localhost:1317")

DEFAULT_HOST = os.environ.get("DEFAULT_HOST", "clear")
ROOT_HOSTCONF = "hosts"
STATIC_URL = "/static/"
STATIC_ROOT = join(BASE_DIR, "static_root")
STATICFILES_DIRS = [
    join(BASE_DIR, "vue/dist/static"),
]
CLEAR_DOMAIN = os.environ.get("CLEAR_DOMAIN", "localhost:8000")

SETTINGS = dict((key, val) for key, val in locals().items() if key.isupper())
if not settings.configured:
    settings.configure(**SETTINGS)
    print("SETTINGS", json.dumps(SETTINGS, indent=2))
django.setup()

# Settings must be configured before importing some things like staticfiles
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from renderers import BetterTemplateHTMLRenderer
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.conf.urls.static import static

# VIEWS


def reconstruct_request(request):
    headers = ""
    for header, value in request.META.items():
        if not header.startswith("HTTP"):
            continue
        header = "-".join([h.capitalize() for h in header[5:].lower().split("_")])
        headers += "{}: {}\n".format(header, value)

    return (
        "{method} {path} HTTP/1.1\n" "Content-Type: {content_type}\n" "{headers}"
    ).format(
        method=request.method,
        path=request.get_full_path(),
        content_type=request.META["CONTENT_TYPE"],
        headers=headers,
    )


class Index(APIView):

    authentication_classes = ()
    permission_classes = ()

    def get(self, request, format=None):
        return Response("Dyson")


class ScriptDetail(APIView):
    authentication_classes = []
    permission_classes = []
    renderer_classes = [BetterTemplateHTMLRenderer, JSONRenderer, BrowsableAPIRenderer]
    template_name = "index.html"

    def get(self, request, script_address=None):
        # TODO: read from settings
        return Response(None)


class FakeSocket:
    def __init__(self, response_bytes):
        self._file = BytesIO(response_bytes)

    def makefile(self, *args, **kwargs):
        return self._file


def resolve_name(name_or_address):
    u = f"{settings.DYSON_RESTHOST}/org/dyson/names/resolve"
    params = {"name": name_or_address}
    req = requests.get(u, params=params)
    return req.json().get("address", None)


def dys_view(request, script_address=None):
    address = script_address or request.script_address
    address = resolve_name(address)
    u = f"{settings.DYSON_RESTHOST}/dyson/wsgi"
    params = {
        "httprequest": reconstruct_request(request),
        "index": address,
        "gaslimit": request.GET.get("DYS_WSGI_GASLIMIT", 100000000),
    }
    dys_req = requests.get(u, params=params)
    if dys_req.status_code != 200:
        try:
            if dys_req.json().get("code", None) == 3:
                # Script not found
                return HttpResponse(f"Script not found: {address}", status=404)
        except:
            pass
        return HttpResponse(dys_req.text, status=dys_req.status_code)
    raw_rep = dys_req.content
    http_response_str = base64.b64decode(dys_req.json()["httpresponse"])

    dys_response = http.client.HTTPResponse(FakeSocket(http_response_str))
    dys_response.begin()

    response = HttpResponse(
        dys_response.read(len(http_response_str)),
        status=dys_response.status,
        headers=dict(dys_response.getheaders()),
    )
    return response


def dys_js_tags(request, js_asset=None):
    from html.parser import HTMLParser
    from django_hosts.resolvers import reverse

    tags = []

    class ScriptHTMLParser(HTMLParser):
        def handle_starttag(self, tag, attrs):
            src = dict(attrs).get("src")
            if tag == "script" and src:
                tags.append(src)

    try:
        with open("vue/dist/index.html") as f:
            h = f.read()
    except FileNotFoundError:
        return HttpResponse(
            """<script>alert('vue/dist/index.html not found, cannot load chain functions')</script>"""
        )

    base_host = reverse("index", host="clear")
    parser = ScriptHTMLParser()
    parser.feed(h)
    js_asset_dict = {
        re.match(r"/static/js/(?P<base_asset_name>[a-z-]+)", t).groupdict()[
            "base_asset_name"
        ]
        + ".js": base_host
        + t
        for t in tags
    }

    if js_asset in js_asset_dict:
        return redirect(js_asset_dict[js_asset])

    return JsonResponse(js_asset_dict)


def node_info(request):
    info = {
        "VUE_APP_API_COSMOS": os.environ.get("VUE_APP_API_COSMOS"),
        "VUE_APP_WS_TENDERMINT": os.environ.get("VUE_APP_WS_TENDERMINT"),
        "VUE_APP_API_TENDERMINT": os.environ.get("VUE_APP_API_TENDERMINT"),
        "VUE_APP_API_TENDERMINT": os.environ.get("VUE_APP_API_TENDERMINT"),
        "CLEAR_DOMAIN": os.environ.get("CLEAR_DOMAIN"),
    }
    return JsonResponse(info)


# URL
urlpatterns = static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + [
    re_path(r"^$", ScriptDetail.as_view(), name="index"),
    re_path(r"^tx$", ScriptDetail.as_view()),
    re_path(r"^scripts/?$", ScriptDetail.as_view()),
    re_path(r"^scripts/(?P<script_address>\w+)$", ScriptDetail.as_view()),
    re_path(r"^txbuilder$", ScriptDetail.as_view()),
    re_path(r"^web/(?P<script_address>\w+)", dys_view),
    re_path(r"^docs", ScriptDetail.as_view(),
]

# djanog-hosts callback
def clear_main_callback(request):
    request.domain = settings.CLEAR_DOMAIN
    request.subdomains = []
    print("clear_main_callback")
    print("domain", request.domain)
    print("subdomains", request.subdomains)


# djanog-hosts callback
def clear_dns_callback(request, domain=None, subdomains=None):
    request.domain = domain
    request.subdomains = []
    if subdomains:
        request.subdomains = subdomains.split(".")

    print("clear_dns_callback")
    print("domain", request.domain)
    request.script_address = domain
    print("subdomains", request.subdomains)
    request.domain = domain


# djanog-hosts callback
def clear_custom_dns_callback(request, domain=None):
    request.is_tor = False
    ext = tldextract.extract(request.get_host())
    if ext.subdomain:
        request.subdomains = ext.subdomain.split(".")
    else:
        request.subdomains = []
    request.domain = ext.registered_domain

    host = request.get_host()
    txt_dict = get_txt_records(host)
    request.txt = txt_dict
    request.script_address = txt_dict.get("dyson", None)

    print("domain", request.domain)
    print("host", host)
    print("subdomains", request.subdomains)
    print("txt", txt_dict)
    print("script_address", request.script_address)


# CLI

if __name__ == "__main__":
    # make this script runnable like the ./manage.py command line script
    from django.core import management

    management.execute_from_command_line()
