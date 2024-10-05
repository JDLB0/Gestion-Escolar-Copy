from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'password', 'role']
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)  # Encripta la contraseña
        user.save()
        return user
    
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Agregar el rol del usuario al token
        token['role'] = user.role  # Añadir el rol al token
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        # Incluir el rol del usuario en la respuesta
        data['role'] = self.user.role
        return data