"""Serializer de medico"""

# Django REST Framework
from rest_framework import serializers

# Modelos
from apis.medic.models import Medic


class MedicModelSerializer(serializers.ModelSerializer):
    """Modelo serializiser del medico"""

    class Meta:
        """Clase Meta"""
        model = Medic
        fields = '__all__'
        read_only_fields = (
            'specility',
            'pacients'
        )
