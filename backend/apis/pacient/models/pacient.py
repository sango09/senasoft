"""Modelo de pacientes"""

# Django
from django.db import models

# Utilidades
from apis.utils.models import ModelUtil


class Pacient(ModelUtil):
    """Modelo de paciente

    Los usuarios registrados con el rol de paciente,
    tendran los siguientes campos que permiten incluir tambien en un grupo
    familiar o crear uno.
    """

    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    # clinic_history = models.FileField()
    eps = models.CharField(max_length=15)
    medic = models.ForeignKey('medic.Medic', on_delete=models.CASCADE)

    def __str__(self):
        return f'Paciente {self.user.first_name} {self.user.last_name}'