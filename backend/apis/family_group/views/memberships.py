"""Vista de los afiliados al grupo familiar"""

# Django REST Framework
from rest_framework import mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

# Modelos
from apis.family_group.models import FamilyGroup, Memberships

# Serializers
from apis.family_group.serializers import MembershipModelSerializer, AddMemberSerializer


class MembershipViewSet(mixins.ListModelMixin,
                        viewsets.GenericViewSet
                        ):

    serializer_class = MembershipModelSerializer

    def get_queryset(self):
        return Memberships.objects.filter(
            family_group=self.f
        )
