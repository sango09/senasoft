"""Vista del grupo familiar"""

# Django REST Framework
from rest_framework import mixins, viewsets, status

# Permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apis.family_group.permissions import IsFamilyGroupAdmin

# Serializers
from apis.family_group.serializers import FamilyModelSerializer

# Modelos
from apis.family_group.models import FamilyGroup, Memberships


class FamilyGroupViewSet(mixins.CreateModelMixin,
                         mixins.RetrieveModelMixin,
                         mixins.UpdateModelMixin,
                         mixins.ListModelMixin,
                         viewsets.GenericViewSet):
    """View set del grupo familiar"""

    serializer_class = FamilyModelSerializer

    def get_queryset(self):
        """Obtiene los grupos familiares"""
        queryset = FamilyGroup.objects.all()
        return queryset

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
