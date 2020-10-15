"""Modelo de utilidades"""

# Django
from django.db import models


class ModelUtil(models.Model):
    """Modelo base
    Este es un modelo abstracto para todo el proyecto donde
    cada modelo podra heredar su datos. Esta clase le
    proporciona a cada tabla los siguientes datos
        + created(Datetime): Almacena la fecha-hora del objecto creado
        + modified(Datetime): Almacena la fecha-hora del objecto modificado
    """
    created = models.DateTimeField(
        'creado el',
        auto_now_add=True,
        help_text='Fecha y hora de cuando el objecto fue creado'
    )
    modified = models.DateTimeField(
        'Modificado el',
        auto_now=True,
        help_text='Fecha y hora de cuando el objecto fue modificado'
    )

    class Meta:
        """Clase meta"""
        abstract = True
        get_latest_by = 'created',
        ordering = ['-created', '-modified']
