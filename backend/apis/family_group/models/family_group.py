"""Modelo del grupo familiar"""

# Django
from django.db import models

# Utilidades
from apis.utils.models import ModelUtil


class FamilyGroup(ModelUtil):
    """Modelo del grupo familiar

    Los grupos familiares, son exclusivos para los pacientes que hacen
    parte del sistema y son titulares. Puede agregar familiares y se genera un
    usuario y contraseña automatica para que el familiar pueda hacer uso del sistema
    """
    members = models.ManyToManyField(
        'users.User',
        through='family_group.Memberships',
        through_fields=('family_group', 'user')
    )

    family_limit = models.PositiveIntegerField(
        default=5,
        help_text='Los grupos familiares estan limitados a 5 familiares incluyendo al titular'
    )
