FROM pypy:2 as build

WORKDIR /usr/src/
RUN git clone  --depth 1 https://github.com/mozillazg/pypy.git --branch py3.9 
COPY pypy-dyson.patch .

WORKDIR /usr/src/pypy
RUN git apply ../pypy-dyson.patch 
RUN make
RUN pypy/tool/release/package.py --without-_tkinter

FROM node:alpine as main

COPY --from=build  /tmp/usession-py3.9-current/build/pypy-nightly /usr/pypy-nightly
ENV PATH="/usr/pypy-nightly/bin:$PATH"
