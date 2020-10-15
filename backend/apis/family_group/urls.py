"""URLs del grupo familiar"""

# Django
from django.urls import include, path

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Vistas
from .views import family_group as family_views
from .views import memberships as membership_views

router = DefaultRouter()
router.register(r'family_group', family_views.FamilyGroupViewSet, basename='family_group')
router.register(r'user/pacient/<username>/family_group/members',
                membership_views.MembershipViewSet,
                basename='membership'
                )

urlpatterns = [
    path('', include(router.urls))
]
