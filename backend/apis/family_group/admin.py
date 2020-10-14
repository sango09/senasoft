"""Admin del grupo familiar"""

# Django
from django.contrib import admin

# Modelos
from apis.family_group.models import FamilyGroup


@admin.register(FamilyGroup)
class FamilyGroupAdmin(admin.ModelAdmin):
    """Admin de los grupos familiares"""
    list_display = ('family_limit',)
