SHELL: SHELL=/bin/bash

start: collectstatic
	uwsgi  --module=wsgi:application --socket :8001
dev: collectstatic
	python ./mini_api.py runserver 0:8000


collectstatic:
	rm -rf /static_root/*
	python ./mini_api.py collectstatic --no-input
	id
	set -x ; \
	for f in $$(grep -rl "REPLACE_VITE_[A-Z_]*" /static_root/); \
	do \
			sed -i'' "s|REPLACE_VITE_ADDRESS_PREFIX|$${VITE_ADDRESS_PREFIX}|g" $$f ; \
			sed -i'' "s|REPLACE_VITE_API_COSMOS|$${VITE_API_COSMOS}|g" $$f ; \
			sed -i'' "s|REPLACE_VITE_API_TENDERMINT|$${VITE_API_TENDERMINT}|g" $$f ; \
			sed -i'' "s|REPLACE_VITE_CHAIN_ID|$${VITE_CHAIN_ID}|g" $$f ; \
			sed -i'' "s|REPLACE_VITE_CHAIN_NAME|$${VITE_CHAIN_NAME}|g" $$f ; \
			sed -i'' "s|REPLACE_VITE_WS_TENDERMINT|$${VITE_WS_TENDERMINT}|g" $$f ; \
			sed -i'' "s|REPLACE_VITE_SENTRY_DSN|$${VITE_SENTRY_DSN}|g" $$f ; \
	done

bash:
	exec bash

