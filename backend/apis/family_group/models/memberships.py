"""Modelo de pacientes"""

# Django
from django.db import models

# Utilidades
from apis.utils.models import ModelUtil


class Memberships(ModelUtil):
    """Modelo de pacientes

    Un paciente puede tener un grupo familiar asociado,
    si el paciente crea el grupo sera el titular de la familia,
    los miembros del grupo familiar no podran agregar mas familiares.

    Solo el titular podra actualizar o eliminar miembros de su grupo familiar
    """
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    family_group = models.ForeignKey('family_group.FamilyGroup', on_delete=models.CASCADE)
    is_admin = models.BooleanField('Titular', default=False)
    parents = models.CharField('parentesco', max_length=40)

    def __str__(self):
        """Regresa el username y el grupo familiar al que pertenece"""
        return f'{self.user.username} hace parte del grupo familiar con el paresto de {self.parents}'
