"""Serializer de la cita medica"""

# Django REST Framework
from rest_framework import serializers

# Modelos
from apis.users.models import User
from apis.medical_appoinment.models import MedicalAppoinmentModels
from apis.family_group.models import Memberships

# Serializers
from apis.pacient.serializers import PacientModelSerializer
from apis.medic.serializers import MedicModelSerializer


# Utildiades

class MedicalAppoinmentModelSerializer(serializers.ModelSerializer):
    """Modelo de serializer para la cita medica"""
    pacient = PacientModelSerializer(read_only=True)
    medic = MedicModelSerializer(read_only=True)

    class Meta:
        """Clase Meta"""
        model = MedicalAppoinmentModels
        fields = '__all__'


