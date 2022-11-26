SHELL:=/bin/bash

write-commit-info:
		echo ${TAG} > chain/app/TAG.txt
		echo ${TAG} > chain/vue/TAG.txt
		echo ${TAG} > frontend/TAG.txt
		sed -i 's;^.*AUTOMATICALLY GENERATED LDFLAGS TAG.*$$;   - "-X github.com/cosmos/cosmos-sdk/version.Version=${TAG}" # AUTOMATICALLY GENERATED LDFLAGS TAG;' chain/config.yml
		sed -i 's;^.*AUTOMATICALLY GENERATED LDFLAGS COMMIT.*$$;   - "-X github.com/cosmos/cosmos-sdk/version.Commit=${CI_COMMIT_SHORT_SHA}" # AUTOMATICALLY GENERATED LDFLAGS COMMIT;' chain/config.yml

gen:
		#docker run --rm -v chain:/workspace --workdir /workspace tendermintdev/sdk-proto-gen:master sh scripts/protocgen.sh
		docker-compose --env .env run --rm chain make vuex
		docker-compose --env .env run --rm chain make gen_rpc
		docker-compose --env .env run --rm vue make build

run:
		docker-compose --env .env up chain frontend

build: write-commit-info
		#docker-compose --env .env build pypy
		docker-compose --env .env build chain
		docker-compose --env .env build frontend

