"""Permisos de admin para el grupo familiar"""

# Django REST Framework
from rest_framework.permissions import BasePermission

# Modelos
from apis.family_group.models import Memberships


class IsFamilyGroupAdmin(BasePermission):
    """Permite el acceso solo al titular del grupo familiar"""

    def has_object_permission(self, request, view, obj):
        """Verifica que el usuario sea el titular del grupo familiarr"""
        try:
            Memberships.objects.get(
                user=request.user,
                family_group=obj,
                is_admin=True
            )
        except Memberships.DoesNotExist:
            return False
        return True
