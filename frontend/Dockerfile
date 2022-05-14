FROM python:3
ENV PYTHONUNBUFFERED=1
RUN apt-get update -y && apt-get install -y gettext-base vim
WORKDIR /code
COPY requirements.txt .
RUN pip install -r ./requirements.txt
COPY . .
