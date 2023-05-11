SHELL:=/bin/bash

write-commit-info:
		echo ${TAG} > chain/app/TAG.txt
		echo ${TAG} > chain/vue/TAG.txt
		echo ${TAG} > frontend/TAG.txt
		sed -i 's;^.*github.com/cosmos/cosmos-sdk/version.Version.*$$;   - "-X github.com/cosmos/cosmos-sdk/version.Version=${TAG}" # AUTOMATICALLY GENERATED LDFLAGS TAG;' chain/config.yml
		sed -i 's;^.*github.com/cosmos/cosmos-sdk/version.Commit.*$$;   - "-X github.com/cosmos/cosmos-sdk/version.Commit=${CI_COMMIT_SHORT_SHA}" # AUTOMATICALLY GENERATED LDFLAGS COMMIT;' chain/config.yml


gen:
		#docker run --rm -v chain:/workspace --workdir /workspace tendermintdev/sdk-proto-gen:master sh scripts/protocgen.sh
		docker compose run --rm chain make vuex
		docker compose run --rm chain make gen_rpc

run:
		docker compose up chain frontend

build: 
		docker-compose build hermes
		rm -rf ./frontend/vue && mkdir -p ./frontend/vue 
		docker compose run --rm vue make build
		docker compose build chain
		docker compose build frontend

release: 
	    sed -i 's;^.*AUTOMATICALLY GENERATED binary.*$$;   binary: dys-cli # AUTOMATICALLY GENERATED binary;' chain/config.yml
		docker compose  run --rm chain make release
	    sed -i 's;^.*AUTOMATICALLY GENERATED binary.*$$;   binary: dysond # AUTOMATICALLY GENERATED binary;' chain/config.yml
