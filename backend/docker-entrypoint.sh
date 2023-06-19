#!/bin/sh

if [[ ! -f db.sqlite3 ]]
then
    export DJANGO_SUPERUSER_PASSWORD=admin
    python manage.py migrate
    python manage.py createsuperuser --noinput --username ADMIN --email ADMIN@EMAIL.COM
fi
python manage.py runserver 0.0.0.0:8000