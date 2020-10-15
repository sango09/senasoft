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
    pacient = models.ForeignKey('pacient.Pacient', on_delete=models.CASCADE)
    is_admin = models.BooleanField('Titular', default=False)

    affiliated = models.PositiveIntegerField(default=0)
    remaining_affiliates = models.PositiveIntegerField(default=0)
    affiliated_by = models.ForeignKey(
        'users.User',
        null=True,
        on_delete=models.CASCADE,
        related_name='affiliated_by'
    )

    def __str__(self):
        """Regresa el username y el grupo familiar al que pertenece"""
        return f'{self.user.username} hace parte del grupo familiar'
