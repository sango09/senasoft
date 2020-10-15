"""Vista de incapacidad medica"""

# Django REST Framework
from rest_framework import generics

# Serializer
from apis.medic.serializers import InabilityModelSerializer

# Modelos
from apis.medic.models import Inability


class ExamsViewSet(generics.GenericAPIView):
    """View set de incapacidad medica"""

    queryset = Inability.objects.all()
    serializer_class = InabilityModelSerializer
