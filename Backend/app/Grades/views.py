from django.shortcuts import render
from .models import Grade
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView,DestroyAPIView,UpdateAPIView
from .serializers import GradeSerializer,CreateGradeSerializer
from rest_framework import viewsets, filters, permissions, response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import serializers
from ..permissions import IsTeacher
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response

# Create your views here.


# class GradeViewSet(viewsets.ModelViewSet):

#     permission_classes = [permissions.IsAuthenticated, IsTeacher]


#     queryset = Grade.objects.all()
#     serializer_class = GradeSerializer

#     filter_backends = [DjangoFilterBackend, filters.SearchFilter]
#     filterset_fields = ['student__user__first_name', 'student__user__last_name', 'evaluation__course__name']
#     search_fields = ['student__user__first_name', 'student__user__last_name', 'evaluation__name']

#     permission_classes = [permissions.IsAuthenticated]
#     authentication_classes = ([JWTAuthentication])

#     def get_queryset(self):
#         user = self.request.user
#         if user.role == 'teacher':
#             return Grade.objects.filter(evaluation__course__teacher__user=user)
#         return Grade.objects.all()
    
#     def perform_create(self, serializer):
#         user = self.request.user
#         if user.role == 'teacher':
#             evaluation = serializer.validated_data['evaluation']
#             if evaluation.course.teacher.user != user:
#                 raise serializers.ValidationError("No tienes permiso para asignar calificaciones a esta evaluación.")
#         serializer.save()

class GradeViewSet(viewsets.ModelViewSet):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer

    def get_serializer_class(self):
        # Usamos un serializer diferente para crear
        if self.action == 'create' or self.action == 'update':
            return CreateGradeSerializer
        return GradeSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)