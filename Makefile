gen:
		docker-compose --env .env.sample run chain make vuex
		docker-compose --env .env.sample run chain make gen_rpc
run:
		docker-compose --env .env.sample run vue

build:
		docker-compose --env .env.sample build chain
		docker-compose --env .env.sample build frontend

