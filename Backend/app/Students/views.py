from django.shortcuts import render
from .models import Student
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView,DestroyAPIView,UpdateAPIView
from .serializers import StudentSerializer
from rest_framework import viewsets, filters, permissions
from django_filters.rest_framework import DjangoFilterBackend
from ..permissions import IsTeacher

# Create your views here.

# class StudentViewSet(viewsets.ModelViewSet):

#     permission_classes = [permissions.IsAuthenticated, IsTeacher]

#     queryset = Student.objects.all()
#     serializer_class = StudentSerializer

#     filter_backends = [DjangoFilterBackend, filters.SearchFilter]
#     filterset_fields = ['grade', 'enrollment_date']
#     search_fields = ['user__first_name', 'user__last_name', 'grade']
    
#     def get_queryset(self):
#         user = self.request.user
#         if user.role == 'teacher':
#             return Student.objects.filter(courses__teacher__user=user).distinct()
#         return Student.objects.all()
    
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Student
from ..Users.models import User
from .serializers import StudentSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        user = User.objects.get(id=data.get('user_id'))
        data['user'] = user.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
