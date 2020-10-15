"""Modelo de usuarios"""

# Django
from django.db import models
from django.contrib.auth.models import AbstractUser

# Utilidades
from apis.utils.models import ModelUtil


class User(ModelUtil, AbstractUser):
    """Modelo de usuario

    Extiende de Model Util y de Abstract User,agregando campos como

        username: Numero de identificacion para ingresar,
        type_id: tipo de identificacion
        birth_data: fecha de nacimiento

        y valores boolenados para los permisos de ingreso
    """
    username = models.CharField(
        'Usuario',
        max_length=40,
        unique=True,
    )

    type_id = models.CharField(
        "Tipo de identificación",
        max_length=10,
        null=False
    )
    birth_date = models.DateField("Fecha de nacimiento")

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'type_id', 'birth_date']

    is_medic = models.BooleanField('Es medico', default=False)
    is_pacient = models.BooleanField('Es paciente', default=False)

    def __str__(self):
        """Regresa el username"""
        return self.username

    def get_short_name(self):
        """Regresa el username recorado"""
        return self.username
