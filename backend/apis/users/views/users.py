"""Vista de usuarios"""

# Django REST Framework
from rest_framework import mixins, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

# Serializers
from apis.users.serializers import (
    UserModelSerializer,
    UserSingupSerializer,
    UserLoginSerializer,
)
from apis.family_group.serializers import FamilyModelSerializer

# Modelos
from apis.users.models import User
from apis.family_group.models import FamilyGroup


class UserViewSet(mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  GenericViewSet):
    """ViewSet de usuario

    Obtiene los datos ingresado, y valida con el serializer necesario
    segun el metodo Http, la vista usar el @action y el metodo solicitado
    """

    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    lookup_field = 'username'

    @action(detail=False, methods=['post'])
    def signup(self, request):
        """Vista de registro"""
        serializer = UserSingupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserModelSerializer(user).data
        return Response(data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def login(self, request):
        """Vista de ingreso"""
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        data = {
            'user': UserModelSerializer(user).data,
            'access_token': token
        }
        return Response(data, status=status.HTTP_201_CREATED)

    @action(detail=False)
    def pacients(self, request):
        recent_users = User.objects.filter(is_pacient=True)
        page = self.paginate_queryset(recent_users)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(recent_users, many=True)
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        """Agrega informacion extra a la respuesta"""
        response = super(UserViewSet, self).retrieve(request, *args, **kwargs)
        family_group = FamilyGroup.objects.filter(
            members=request.user
        )
        data = {
            'user': response.data,
            'family_group': FamilyModelSerializer(family_group, many=True).data
        }
        response.data = data
        return response
