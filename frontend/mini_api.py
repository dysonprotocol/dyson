import base64
import http.client
import os
import re
from io import BytesIO
from os.path import abspath, dirname, join

import django
import requests
import simplejson as json
import tldextract
from django.conf import settings
from django.shortcuts import redirect, render
from django.urls import re_path

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
            join(BASE_DIR, "vue/"),
            join(BASE_DIR, "templates/"),
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
STATIC_ROOT = "/static_root"
STATICFILES_DIRS = [
    join(BASE_DIR, "vue/static"),
    join(BASE_DIR, "static"),
]
CLEAR_DOMAIN = os.environ.get("CLEAR_DOMAIN", "localhost:8000")
DYS_DOMAIN = os.environ.get("DYS_DOMAIN") or "dys." + CLEAR_DOMAIN

SETTINGS = dict((key, val) for key, val in locals().items() if key.isupper())
if not settings.configured:
    settings.configure(**SETTINGS)
    print("SETTINGS", json.dumps(SETTINGS, indent=2))
django.setup()

from django.conf.urls.static import static
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import BrowsableAPIRenderer, JSONRenderer

# Settings must be configured before importing some things like staticfiles
from rest_framework.response import Response
from rest_framework.views import APIView

from renderers import BetterTemplateHTMLRenderer

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

    def get(self, request, **kwargs):
        # TODO: read from settings
        return Response(None)


class FakeSocket:
    def __init__(self, response_bytes):
        self._file = BytesIO(response_bytes)

    def makefile(self, *args, **kwargs):
        return self._file


def dys_view(request, script_address=None):
    address = script_address or request.script_address
    u = f"{settings.DYSON_RESTHOST}/dyson/wsgi"
    params = {
        "httprequest": reconstruct_request(request),
        "index": address,
        "gaslimit": request.GET.get("DYS_WSGI_GASLIMIT", 100000000),
    }
    dys_req = requests.get(u, params=params)
    if dys_req.status_code != 200:
        try:
            if dys_req.json().get("code", None) == 2:
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
    try:
        with open("vue/index.html") as f:
            h = f.read()
    except FileNotFoundError:
        return HttpResponse("""Cannot extract js files""")

    js_assets = re.findall(r'"/static/(?P<base_asset_name>.*\.js)"', h)

    return render(
        request,
        "loader.js",
        {"script_paths": [settings.STATIC_URL + a for a in js_assets]},
        content_type="application/javascript",
    )


def node_info(request):
    info = {
        "VITE_API_COSMOS": os.environ.get("VITE_API_COSMOS"),
        "VITE_WS_TENDERMINT": os.environ.get("VITE_WS_TENDERMINT"),
        "VITE_API_TENDERMINT": os.environ.get("VITE_API_TENDERMINT"),
        "VITE_API_TENDERMINT": os.environ.get("VITE_API_TENDERMINT"),
        "CLEAR_DOMAIN": os.environ.get("CLEAR_DOMAIN"),
        "DYS_DOMAIN": DYS_DOMAIN,
    }
    return JsonResponse(info)


# URL


def trigger_error(request):
    division_by_zero = 1 / 0


from django.urls import path

urlpatterns = static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + [
    re_path(r"^web/(?P<script_address>\w+)", dys_view),
    re_path(r"", ScriptDetail.as_view(), name="index"),
    path("sentry-debug/", trigger_error),
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
    if not domain.startswith("dys"):
        # not an address, so append .dys
        domain = domain + ".dys"
    request.domain = domain
    request.subdomains = []
    if subdomains:
        request.subdomains = subdomains.split(".")

    print("clear_dns_callback")
    print("domain", request.domain)
    request.script_address = domain
    print("subdomains", request.subdomains)


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


import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

sentry_sdk.init(
    dsn=os.environ.get("PYTHON_SENTRY_DSN"),
    # dsn="https://679c7175bcf949ac9021156cfbb372ae@o1422051.ingest.sentry.io/6768384",
    integrations=[
        DjangoIntegration(),
    ],
    traces_sample_rate=1.0,
)

# CLI

if __name__ == "__main__":
    # make this script runnable like the ./manage.py command line script
    from django.core import management

    management.execute_from_command_line()
