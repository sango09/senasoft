"""Modelo  de medico"""

# Django
from django.db import models

# Utilidades
from apis.utils.models import ModelUtil


class Medic(ModelUtil):
    """Modelo del medico

    Extiende de Model Util y agrega nuevos campos como
    la especilidad del medico y los pacientes que tiene
    asignado
    """

    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='usuario')
    speciality = models.CharField('Especialidad', max_length=100)

    pacients = models.ManyToManyField(
        'users.User',
        through='pacient.Pacient',
        through_fields=('medic', 'user')
    )

    def __str__(self):
        """Regresa el nombre completo del medico"""
        return f'{self.user.first_name} {self.user.last_name}'
