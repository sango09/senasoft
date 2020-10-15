"""Modelo de incapacidad medica"""

# Django
from django.db import models

# Utilidades
from apis.utils.models import ModelUtil


class Inability(ModelUtil):
    """Modelo de incapacidad medica

    Extiende del Model Util y agrega campos que permiten generar
    la incapidad medica solicitada por el medico correspondiente
    """

    pacient = models.ForeignKey('pacient.Pacient', on_delete=models.CASCADE)
    medic = models.ForeignKey('medic.Medic', on_delete=models.CASCADE)
    final_date_inability = models.DateField()
    description = models.TextField(max_length=500)

