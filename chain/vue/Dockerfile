FROM node:17-slim

# install simple http server for serving static content
RUN npm install -g http-server

RUN apt-get update  && apt-get install python build-essential wget -y

# make the 'app' folder the current working directory
WORKDIR /app
