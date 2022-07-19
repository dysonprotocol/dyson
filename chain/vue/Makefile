get-ignite-web:
	curl -o ignite-web.tar.gz https://gitlab.com/dysonproject/ignite-web/-/archive/fees-0.1.56/ignite-web-fees-0.1.56.tar.gz
	rm -rf ignite-web
	mkdir ignite-web
	tar -xf ignite-web.tar.gz --strip-components=1 -C ignite-web

build: clean 
	npm install --include dev && NODE_ENV=production npm run build && cp -r /app/dist /tmp

dev:
	npm run dev

clean:
	rm -rf /tmp/*
