from django.contrib import admin
from .models import PersonalLoan


@admin.register(PersonalLoan)
class PersonalLoanAdmin(admin.ModelAdmin):
    list_display = ['person', 'status', 'value']
