FROM golang:1.17


WORKDIR /go/src/app


RUN apt-get update && apt-get -y install python3-pip jq unzip vim libre2-dev

RUN cd .. && wget --no-verbose -O starport.zip https://gitlab.com/dysonproject/starport/-/archive/writemodual/starport-writemodual.zip && unzip -d starport starport.zip && cd "$(ls -t1 -d starport/starport*/ | head -n1)" && make && make install && cd  /go/src/app

COPY go.mod go.sum .go-version ./
RUN go mod download -x

RUN pip install https://gitlab.com/sybil.singleton/pyre2/-/archive/master/pyre2-master.zip
COPY requirements.txt .
RUN pip3 install -r requirements.txt


RUN go install github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema@latest
COPY . ./

RUN starport chain build -v
