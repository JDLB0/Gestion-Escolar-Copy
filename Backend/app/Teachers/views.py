from django.shortcuts import render
from .models import Teacher
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView,DestroyAPIView,UpdateAPIView
from .serializers import TeacherSerializer
from rest_framework import viewsets, filters,permissions
from django_filters.rest_framework import DjangoFilterBackend
from ..permissions import IsTeacher
from rest_framework.permissions import IsAuthenticated, AllowAny
# Create your views here.


# class TeacherViewSet(viewsets.ModelViewSet):

#     permission_classes = [AllowAny]
#     # permission_classes = [permissions.IsAuthenticated, IsTeacher]

#     queryset = Teacher.objects.all()
#     serializer_class = TeacherSerializer

#     filter_backends = [DjangoFilterBackend, filters.SearchFilter]
#     filterset_fields = ['department', 'hire_date']
#     search_fields = ['user__first_name', 'user__last_name', 'department']

# views.py
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Teacher, User
from .serializers import TeacherSerializer
from ..Users.serializers import UserSerializer

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        user = User.objects.get(id=data.get('user_id'))  # Obtén el usuario por ID
        data['user'] = user.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    

