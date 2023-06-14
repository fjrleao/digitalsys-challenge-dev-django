from django.urls import path
from .views import PersonalLoanView


urlpatterns = [
    path('personal_loans/', PersonalLoanView.as_view())
]
