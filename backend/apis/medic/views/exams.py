"""Vista de examenes medicos"""

# Django REST Framework
from rest_framework import generics

# Serializer
from apis.medic.serializers import ExamModelSerializer

# Modelos
from apis.medic.models import Exams


class ExamsViewSet(generics.GenericAPIView):
    """View set de los examenes medicos"""

    queryset = Exams.objects.all()
    serializer_class = ExamModelSerializer
