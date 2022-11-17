SHELL:=/bin/bash

build:
	ignite chain build -v --skip-proto

start:
	dysond start 

dev:
	ignite chain serve -v -f --skip-proto

bash:
	exec bash

vuex:
	rm -rf ./vue/src/store/generated/*
	ignite generate vuex 
	chown 1000:1000 -R ./vue/src/store/generated

gen_rpc:
	python3 gen_rpc.py
	gofmt -s -w x/dyson/keeper/rpcserver.go

export:
	dysond export --log_level panic 2>&1 | jq > ~/latest-export.json && cp ~/latest-export.json ~/export-`date -u +"%Y-%m-%dT%H:%M:%SZ"`.json

restore-latest:
	ORIG_GENESIS=~/latest-export.json ; \
	NEW_GENESIS=~/.dyson/config/genesis.json ; \
	cat $$ORIG_GENESIS | jq '.consensus_params.block += {"time_iota_ms": "1000"} ' > $$NEW_GENESIS && git -P diff --no-index $$ORIG_GENESIS $$NEW_GENESIS || echo "done"


reset:
	dysond tendermint unsafe-reset-all


install-ignite:
	cd /tmp && rm -rf ignite-cli && mkdir -p ignite-cli && wget -O ignite-cli.tar.gz https://gitlab.com/dysonproject/ignite-cli/-/archive/develop/ignite-cli-develop.tar.gz && tar -xf ignite-cli.tar.gz --strip-component=1 --directory=ignite-cli && cd ignite-cli && make && make install
