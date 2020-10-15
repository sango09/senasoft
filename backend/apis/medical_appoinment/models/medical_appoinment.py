"""Modelo de cita medica"""

# Django
from django.db import models

# Utilidades
from apis.utils.models import ModelUtil


class MedicalAppoinmentModels(ModelUtil):
    """Modelo de citas medicas"""

    pacient = models.ForeignKey('pacient.Pacient', on_delete=models.CASCADE)
    medic = models.ForeignKey('medic.Medic', on_delete=models.CASCADE)

    date_appoinment = models.DateField(null=False)
    url_webex = models.URLField()
    symptoms = models.TextField(max_length=250)

    def __str__(self):
        """Regresa los detalles de la cita"""
        return f'{self.pacient} tiene una cita medica con {self.medic} el dia {self.date_appoinment}, el paciente ' \
               f'presenta los siguientes sintomas {self.symptoms} '


