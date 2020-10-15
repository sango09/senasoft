"""Serializer de examenes medicos"""

# Django REST Framework
from rest_framework import serializers

# Modelos
from apis.medic.models import Exams


class ExamModelSerializer(serializers.ModelSerializer):
    """Modelo serializer de los examenes medicos"""

    class Meta:
        """Clase Meta"""
        model = Exams
        fields = '__all__'
