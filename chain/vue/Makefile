SHELL := /bin/bash


install:
	echo $$UID
	pwd
	ls -la .
	npm ci --install-links 

build: install 
	npm run build ; exitCode=$$? ;  chmod -R a+rwX /app/dist ; exit "$$exitCode"


dev: install
	npm run dev

