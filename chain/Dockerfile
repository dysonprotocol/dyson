FROM --platform=linux/amd64 registry.gitlab.com/dysonproject/dyson/pypy:3.9 as dyson-pypy

FROM --platform=linux/amd64 golang:1.18 

WORKDIR /go/src/app

COPY --from=dyson-pypy /usr/pypy-nightly /usr/pypy-nightly

ENV PATH="/usr/pypy-nightly/bin:$PATH"

RUN pypy -m ensurepip

RUN apt-get update && apt-get -y install jq unzip vim libre2-dev black=20.8b1-4

RUN pypy -m pip install https://gitlab.com/sybil.singleton/pyre2/-/archive/master/pyre2-master.zip

RUN go install github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema@latest

COPY Makefile ./
RUN make install-ignite

COPY requirements.txt .
RUN pypy -m pip install -r requirements.txt

COPY go.mod go.sum .go-version ./
RUN go mod download -x


COPY . ./

RUN make build 
