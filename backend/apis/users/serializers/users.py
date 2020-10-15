"""Serializer de usuario"""

# Django
import random

from django.contrib.auth import password_validation, authenticate

# Django REST Framework
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework.authtoken.models import Token

# Models
from apis.medic.models import Medic
from apis.pacient.models import Pacient
from apis.users.models import User

# Serializers
from apis.medic.serializers import MedicModelSerializer
from apis.pacient.serializers import PacientModelSerializer


class UserModelSerializer(serializers.ModelSerializer):
    """Modelo del serializer para el usuario"""

    medic = MedicModelSerializer(read_only=True)
    pacient = PacientModelSerializer(read_only=True)

    class Meta:
        """Clase Meta"""

        model = User
        fields = (
            'type_id', 'username',
            'first_name', 'last_name',
            'email', 'birth_date',
            'medic', 'pacient', 'is_medic',
            'is_pacient'
        )


class UserSingupSerializer(serializers.Serializer):
    """Serialiazer del registro de usuario

    Cuenta con validaciones de datos y creacion del usuario instanciando su
    rol de acuerdo al tipo de usuario registrado
    """
    type_id = serializers.CharField(min_length=2, max_length=15)
    username = serializers.CharField(
        validators=[UniqueValidator(queryset=User.objects.all())],
        min_length=4,
        max_length=20
    )

    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    # Contraseña
    password = serializers.CharField(min_length=8)
    password_confirmation = serializers.CharField(min_length=8)

    # Datos Personales
    first_name = serializers.CharField(min_length=2, max_length=20)
    last_name = serializers.CharField(min_length=2, max_length=20)
    birth_date = serializers.DateField()

    is_medic = serializers.BooleanField()
    is_pacient = serializers.BooleanField()

    def validate(self, data):
        """Validacion de campos ingresados"""
        passwd = data['password']
        passwd_confirmation = data['password_confirmation']

        if passwd != passwd_confirmation:
            raise serializers.ValidationError('Las contraseñas no coinciden')
        password_validation.validate_password(passwd)
        return data

    def create(self, validated_data):
        """Crea el usuario luego de validar los datos ingresados
        Y le asigna un rol solo si es pasado como dato
        """
        validated_data.pop('password_confirmation')
        user = User.objects.create_user(**validated_data)

        if user.is_medic:
            Medic.objects.create(user=user)
        elif user.is_pacient:
            first = Medic.objects.first().pk
            last = Medic.objects.last().pk
            random_medic = int(random.randrange(last, first))
            print(random_medic)
            Pacient.objects.create(user=user, medic=Medic.objects.get(pk=random_medic))
        return user


class UserLoginSerializer(serializers.Serializer):
    """Serializer de ingreso al sistema

    Obtiene los datos de la solicitud de ingreso
    """
    username = serializers.CharField()
    password = serializers.CharField(min_length=8)

    def validate(self, data):
        """Verifica credenciales"""
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise serializers.ValidationError('Credenciales invalidas')
        self.context['user'] = user
        return data

    def create(self, validated_data):
        """Genera o recibe el token de autenticación"""
        token, created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'], token.key
