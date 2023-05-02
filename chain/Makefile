BUILDDIR ?= $(CURDIR)/build

SHELL:=/bin/bash

clean:
	rm -rf release

build: 
	ignite chain build -v --release -t linux:amd64 -t darwin:amd64 -t darwin:arm64 --check-dependencies --release.prefix "dyson-protocol-$$(cat app/TAG.txt)"
	tar xf ./release/dyson-protocol*_linux_amd64.tar.gz -C /bin/
	cp -r ./release/ /tmp/release/

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
	find vue/src/store/generated/cosmos/cosmos-sdk/cosmos.nft.v1beta1/ -type f -exec sed -i 's/ueryNfT/ueryNFT/g' {} +
	find vue/src/store/generated/cosmos/cosmos-sdk/cosmos.nft.v1beta1/ -type f -exec sed -i 's/ueryNft/ueryNFT/g' {} +


gen_rpc:
	dysond q dyson export-interfaces | jq > ./vue/src/views/exported-interfaces.json
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
