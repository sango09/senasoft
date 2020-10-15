"""Serializer del grupo familiar"""

# Django REST Framework
from rest_framework import serializers

# Modelos
from apis.family_group.models import FamilyGroup


class FamilyModelSerializer(serializers.ModelSerializer):
    """Modelo serializer del grupo familiar"""

    class Meta:
        """Clase Meta"""

        model = FamilyGroup
        fields = '__all__'
        read_only_fields = (
            'family_limit',
        )
