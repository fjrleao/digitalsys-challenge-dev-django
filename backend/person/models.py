from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=64)
    cpf = models.CharField(max_length=11, unique=True)
    address = models.CharField(max_length=120)

    def __str__(self) -> str:
        return f'{self.name} - {self.cpf}'
