FROM pypy:2

WORKDIR /usr/src/
RUN git clone  --depth 1 https://github.com/mozillazg/pypy.git --branch py3.9 
COPY pypy-dyson.patch .

WORKDIR /usr/src/pypy
RUN git apply ../pypy-dyson.patch 
RUN make
RUN pypy/tool/release/package.py --without-_tkinter

FROM golang:1.17

WORKDIR /go/src/app

COPY --from=0  /tmp/usession-py3.9-current/build/pypy-nightly /usr/pypy-nightly
ENV PATH="/usr/pypy-nightly/bin:$PATH"

RUN pypy -m ensurepip

RUN apt-get update && apt-get -y install jq unzip vim libre2-dev
RUN cd .. && wget --no-verbose -O starport.zip https://gitlab.com/dysonproject/starport/-/archive/writemodual/starport-writemodual.zip && unzip -d starport starport.zip && cd "$(ls -t1 -d starport/starport*/ | head -n1)" && make && make install && cd  /go/src/app
COPY go.mod go.sum .go-version ./
RUN go mod download -x
RUN pypy -m pip install https://gitlab.com/sybil.singleton/pyre2/-/archive/master/pyre2-master.zip
COPY requirements.txt .
RUN pypy -m pip install -r requirements.txt

RUN go install github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema@latest

RUN apt -y install black=20.8b1-4

COPY . ./

RUN starport chain build -v
