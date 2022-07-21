SHELL := /bin/bash

get-ignite-web:
	wget -nc -O ignite-web.tar.gz https://gitlab.com/dysonproject/ignite-web/-/archive/fees-0.1.56/ignite-web-fees-0.1.56.tar.gz || echo "not downloading"
	rm -rf ignite-web
	mkdir ignite-web
	tar -xf ignite-web.tar.gz --strip-components=1 -C ignite-web 

build: clean 
	make get-ignite-web || echo "skipping ignite-web"
	set -a && source .env.build && set +a && npm install --include dev && NODE_ENV=production npm run build && cp -r /app/dist /tmp

dev:
	make get-ignite-web || echo "skipping ignite-web"
	npm run dev

clean:
	rm -rf /tmp/*
