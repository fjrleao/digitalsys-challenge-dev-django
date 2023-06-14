from .models import PersonalLoan
from time import sleep


def analyse_loan_proposals(loan_proposal_id):
    sleep(2)
    proposal_loan = PersonalLoan.objects.get(id=loan_proposal_id)
    if loan_proposal_id % 2 == 0:
        proposal_loan.status = 'AP'
    else:
        proposal_loan.status = 'ND'

    proposal_loan.save()
