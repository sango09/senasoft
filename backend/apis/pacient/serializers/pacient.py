"""Serializer de paciente"""

# Django REST Framework
from rest_framework import serializers

# Modelos
from apis.pacient.models import Pacient


class PacientModelSerializer(serializers.ModelSerializer):
    """Modelo serializiser del medico"""

    class Meta:
        """Clase Meta"""
        model = Pacient
        fields = '__all__'
