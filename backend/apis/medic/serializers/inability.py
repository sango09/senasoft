"""Serializer de incapacidad medica"""

# Django REST Framework
from rest_framework import serializers

# Modelos
from apis.medic.models import Inability


class InabilityModelSerializer(serializers.ModelSerializer):
    """Modelo serializer de los examenes medicos"""

    class Meta:
        """Clase Meta"""
        model = Inability
        fields = '__all__'
