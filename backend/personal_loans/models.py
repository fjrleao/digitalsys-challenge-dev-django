from django.db import models


LOAN_STATUS = {
    ('AV', 'EM AVALIAÇÃO'),
    ('ND', 'NEGADA'),
    ('AP', 'APROVADA')
}


class PersonalLoan(models.Model):
    value = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=2, choices=LOAN_STATUS, default='AV')

    person = models.ForeignKey('person.Person', on_delete=models.RESTRICT)

    def __str__(self) -> str:
        return f'{self.person.name} ({self.person.cpf}) - {self.get_status_display()}'
