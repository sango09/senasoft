"""Admin del grupo familiar"""

# Django
from django.contrib import admin

# Modelos
from apis.family_group.models import FamilyGroup, Memberships


@admin.register(FamilyGroup)
class FamilyGroupAdmin(admin.ModelAdmin):
    """Admin de los grupos familiares"""
    list_display = ('family_limit','slug_name')


@admin.register(Memberships)
class MembershipAdmin(admin.ModelAdmin):
    """Admin de los miembros de un grupo familiar"""
    list_display = (
    'user', 'family_group', 'pacient', 'is_admin', 'affiliated', 'remaining_affiliates', 'affiliated_by')
