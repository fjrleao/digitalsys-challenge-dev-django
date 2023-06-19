from .models import PersonalLoan
from celery import shared_task
from time import sleep


## Função que fará a analise da proposta de projeto
@shared_task()
def analyse_loan_proposals(loan_proposal_id):
    ## Usei o sleep de 2 segundos para simular uma requisição demorada, e apesar desse sleep, a resposta ao usuário é retornada em poucos milisegundos, demostrando que o celery está funcionando
    sleep(2)
    proposal_loan = PersonalLoan.objects.get(id=loan_proposal_id)

    ## Propostas de emprestimo com id par são aprovadas, e como id impar são negadas, dessa forma metade das propostas são aprovadas e metade são negadas. Depois disso o status é atualizado no banco
    if loan_proposal_id % 2 == 0:
        proposal_loan.status = 'AP'
    else:
        proposal_loan.status = 'ND'

    proposal_loan.save()
