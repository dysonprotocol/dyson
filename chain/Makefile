SHELL:=/bin/bash

start:
	dysond start 

dev:
	starport chain serve -r -v

bash:
	exec bash

vuex:
	starport generate vuex 

gen_rpc:
	python3 gen_rpc.py
	gofmt -s -w x/dyson/keeper/rpcserver.go

export:
	dysond export --log_level panic |& jq > ~/latest-export.json && cp ~/latest-export.json ~/export-`date -u +"%Y-%m-%dT%H:%M:%SZ"`.json

reset:
	cp ~/latest-export.json  ~/.dyson/config/genesis.json
	dysond unsafe-reset-all

