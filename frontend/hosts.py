import re
from django.conf import settings
from django_hosts import patterns, host

clear_domain = re.escape(settings.CLEAR_DOMAIN)
dys_domain = re.escape(settings.DYS_DOMAIN)

if not dys_domain:
    dys_domain = f"dys.{ clear_domain }"

host_patterns = patterns(
    dys_domain,
    "",
    host(
        rf"{ dys_domain }",
        settings.ROOT_URLCONF,
        callback="mini_api.clear_main_callback",
        name="clear",
    ),
    host(
        fr"((?P<subdomains>[a-z0-9-.]+)\.)*(?P<domain>[a-z0-9-]+)\.{ clear_domain }",
        "dys_urls",
        callback="mini_api.clear_dns_callback",
        name="clear_subdomain",
    ),
    host(
        fr"(?P<domain>.+)",
        "dys_urls",
        callback="mini_api.clear_custom_dns_callback",
        name="clear_custom_domain",
    ),
)
