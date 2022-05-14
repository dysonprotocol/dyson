start:
	dysond start --log_level debug

dev:
	starport chain serve -r -v

bash:
	exec bash

vuex:
	starport generate vuex 

gen_rpc:
	python3 gen_rpc.py
	gofmt -s -w x/dyson/keeper/rpcserver.go
