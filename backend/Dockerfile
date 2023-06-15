FROM python:3.9-alpine

EXPOSE 8000

ENV PYTHONUNBUFFERED=1
ENV DJANGO_SUPERUSER_PASSWORD=admin

WORKDIR /app

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY ./ ./

RUN python manage.py migrate

RUN python manage.py createsuperuser --noinput --username ADMIN --email ADMIN@EMAIL.COM

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]