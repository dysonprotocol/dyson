import functools
import dns.resolver
from ast import literal_eval
from urllib.parse import urlparse, urlencode, parse_qsl
import time


resolver = dns.resolver.Resolver(configure=False)
resolver.nameservers = ["1.1.1.1", "8.8.8.8"]
resolver.timeout = 0.5
resolver.lifetime = 2
resolver.retry_servfail = True


def lru_cache(timeout: int, maxsize: int = 128, typed: bool = False):
    def wrapper_cache(func):
        func = functools.lru_cache(maxsize=maxsize, typed=typed)(func)
        func.delta = timeout * 10 ** 9
        func.expiration = time.monotonic_ns() + func.delta

        @functools.wraps(func)
        def wrapped_func(*args, **kwargs):
            if time.monotonic_ns() >= func.expiration:
                func.cache_clear()
                func.expiration = time.monotonic_ns() + func.delta
            return func(*args, **kwargs)

        wrapped_func.cache_info = func.cache_info
        wrapped_func.cache_clear = func.cache_clear
        return wrapped_func
    return wrapper_cache

@lru_cache(timeout=600)
def get_txt_records(domain):
    try:
        answers = resolver.query(domain, "TXT", raise_on_no_answer=False)
    except (dns.exception.Timeout, dns.resolver.NXDOMAIN):
        return {}
    for a in answers:
        print("TXT", domain, a)
        txt_str = literal_eval(str(a))
        if "dyson=" in txt_str:
            return dict(parse_qsl(txt_str))
    print("NO TXT", domain)
    return {}
