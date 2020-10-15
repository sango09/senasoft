"""Modelo de autorizacion de examenes"""

# Django
from django.db import models

# Utilidades
from apis.utils.models import ModelUtil


class Exams(ModelUtil):
    """Modelo de autorizacion de examanes

    Extiende de Model Util y agrega nuevos campos para
    la gestion de autorizacion y envio por correo electronico del
    paciente
    """

    pacient = models.ForeignKey('pacient.Pacient', on_delete=models.CASCADE)
    exam_name = models.CharField(max_length=50)
    description_exam = models.TextField(max_length=500)
