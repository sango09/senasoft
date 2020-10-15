"""Admin de los pacientes"""

# Django
from django.contrib import admin

# Modelos
from apis.pacient.models import Pacient


@admin.register(Pacient)
class PacientsAdmin(admin.ModelAdmin):
    """Admin de pacientes"""
    list_display = ('user',)
