"""Admin de usuarios"""

# Django
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Modelos
from apis.users.models import User


class CustomUserAdmin(UserAdmin):
    """Modelo del admin de usuario"""

    list_display = ('email', 'username',
                    'first_name', 'last_name',
                    'type_id', 'birth_date',
                    'is_medic', 'is_pacient')

    list_filter = ('is_medic', 'is_pacient', 'type_id', 'created', 'modified')


admin.site.register(User, CustomUserAdmin)
