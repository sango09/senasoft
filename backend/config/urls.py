"""Main URLs module"""

# Django
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
                  # Django Admin
                  path('admin/', admin.site.urls),
                  # Include APIs
                  path('', include(('apis.users.urls', 'users'), namespace='users')),
                  path('', include(('apis.family_group.urls', 'family'), namespace='family')),
                  path('', include(('apis.pacient.urls', 'pacient'), namespace='pacient'))
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
