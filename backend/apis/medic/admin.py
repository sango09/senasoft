"""Admin de medico"""

# Django
from django.contrib import admin

# Modelos
from apis.medic.models import Medic


@admin.register(Medic)
class MedicAdmin(admin.ModelAdmin):
    """Admin del medicos"""

    list_display = ('user', 'speciality')
    search_fields = ('user__username', 'user__email', 'user__first_name', 'user__last_name')
    list_filter = ('speciality',)
