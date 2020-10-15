"""Serializer de los miembros de un grupo familiar"""

# Django REST Framework
from rest_framework import serializers

# Serializers
from apis.users.serializers import UserModelSerializer
from apis.pacient.serializers import PacientModelSerializer

# Models
from apis.family_group.models import Memberships


class MembershipModelSerializer(serializers.ModelSerializer):
    """Modelo de serializer para los mimebros de una familia"""

    user = UserModelSerializer(read_only=True)
    affiliated_by = serializers.StringRelatedField()
    pacient = PacientModelSerializer(read_only=True)

    class Meta:
        """Clase Meta"""

        model = Memberships
        fields = (
            'user',
            'is_admin',
            'affiliated', 'remaining_affiliates',
            'affiliated_by',
        )

        read_only_fields = (
            'user',
            'affiliated', 'remainig_affiliates',
            'affiliated_by'
        )


class AddMemberSerializer(serializers.Serializer):
    """Serializer para agregar un familiar
    al grupo creado por el familiar titular
    """
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    def validate_user(self, data):
        """Verifica que el familiar ya fue registrado en grupo familiar"""
        family_group = self.context['family_group']
        user = data
        q = Memberships.objects.filter(family_group=family_group, user=user)
        if q.exists():
            raise serializers.ValidationError('Este usuario ya fue registrado en el grupo familiar')
        return data

    def validate(self, data):
        """Verifica que el familiar titular pueda agregar nuevos familiares al grupo"""
        family_group = self.context['family_group']
        if family_group.members.count() >= family_group.family_limit:
            raise serializers.ValidationError('El grupo familiar alcanzo el limite de afiliados')
        return data

    def create(self, validated_data):
        """Crea un nuevo afiliado al grupo familiar"""
        family_group = self.context['family_group']
        user = validated_data['user']

        # Creacion del afiliado
        member = Memberships.objects.create(
            user=user,
            pasient=user.pacient,
            family_group=family_group,
            affiliated_by=user.pacient
        )

        issuer_afiliated = Memberships.objects.get(user=user, family_group=family_group)
        issuer_afiliated.remaining_affiliates -= 1
        issuer_afiliated.save()

        return member
