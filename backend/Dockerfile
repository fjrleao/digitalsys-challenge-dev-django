FROM python:3.9-alpine

EXPOSE 8000

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY ./ ./
