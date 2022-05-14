SHELL: SHELL=/bin/bash

start: collectstatic
	uwsgi  --module=wsgi:application --socket :8001
dev: collectstatic
	python ./mini_api.py runserver 0:8000

collectstatic:
	for f in $$(grep -rl "VUE_APP_[A-Z_]*" ./vue/dist/static/js/*.js); do envsubst '$${VUE_APP_API_COSMOS} $${VUE_APP_WS_TENDERMINT} $${VUE_APP_API_TENDERMINT} $${VUE_APP_API_TENDERMINT} $${VUE_APP_ADDRESS_PREFIX} $${VUE_APP_CHAIN_ID} $${VUE_APP_CHAIN_NAME}'	< $$f > $$f.out && mv $$f.out $$f;  done
	python ./mini_api.py collectstatic --no-input

bash:
	exec bash
