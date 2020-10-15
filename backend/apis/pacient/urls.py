"""URLs del grupo familiar"""

# Django
from django.urls import include, path

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Vistas
from .views import pacients as pacient_views

router = DefaultRouter()
router.register(r'pacients', pacient_views.PacientViewSet, basename='pacients')

urlpatterns = [
    path('', include(router.urls))
]