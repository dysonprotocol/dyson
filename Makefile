gen:
		docker-compose --env .env run chain make vuex
		docker-compose --env .env run chain make gen_rpc
run:

build:
		docker-compose run --rm vue make build
		docker-compose --env .env build chain
		docker-compose --env .env build frontend

