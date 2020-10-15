"""Vista de cita medica"""

# Django REST Framework
from rest_framework import mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

# Serializers
from apis.medical_appoinment.serializers import MedicalAppoinmentModelSerializer

# Modelos
from apis.medical_appoinment.models import MedicalAppoinmentModels


class MedicalAppoinmentViewSet(viewsets.ModelViewSet):
    """View set de la cita medica"""
    serializer_class = MedicalAppoinmentModelSerializer
    queryset = MedicalAppoinmentModels
