from django.urls import path
from .views import PersonalLoanProposalView


urlpatterns = [
    path('personal_loans/proposal/', PersonalLoanProposalView.as_view())
]
