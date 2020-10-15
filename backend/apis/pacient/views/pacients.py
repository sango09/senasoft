"""Vista del paciente"""

# Django REST Framework
from rest_framework import mixins, viewsets, status

# Permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Serializers
from apis.pacient.serializers import PacientModelSerializer

# Modelos
from apis.pacient.models import Pacient


class PacientViewSet(mixins.CreateModelMixin,
                         mixins.RetrieveModelMixin,
                         mixins.UpdateModelMixin,
                         mixins.ListModelMixin,
                         viewsets.GenericViewSet):
    """View set del grupo familiar"""

    serializer_class = PacientModelSerializer

    def get_queryset(self):
        """Obtiene los grupos familiares"""
        queryset = Pacient.objects.all()
        return queryset

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
