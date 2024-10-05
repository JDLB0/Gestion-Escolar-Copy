from django.shortcuts import render
from .models import Course
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView,DestroyAPIView,UpdateAPIView
from .serializers import CourseSerializer
from rest_framework import viewsets, filters, permissions
from django_filters.rest_framework import DjangoFilterBackend
from ..permissions import IsTeacher
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
# Create your views here.

# class CourseViewSet(viewsets.ModelViewSet):

#     permission_classes = [AllowAny]

#     # permission_classes = [permissions.IsAuthenticated, IsTeacher]
#     serializer_class = CourseSerializer
#     queryset = Course.objects.all()

#     filter_backends = [
#         DjangoFilterBackend,
#         filters.SearchFilter,
#     ]
#     filterset_fields = ('__all__')
#     search_fields = ('__all__')

#     # def get_queryset(self):
#     #     # Filtramos solo los cursos del profesor logueado
#     #     user = self.request.user
#     #     return Course.objects.filter(teacher__user=user)from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Course
from .serializers import CourseSerializer
from ..Teachers.models import Teacher
from ..Students.models import Student



from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    @action(detail=True, methods=['post'])
    def enroll_student(self, request, pk=None):
        course = self.get_object()
        student_id = request.data.get('student_id')

        try:
            student = Student.objects.get(id=student_id)
            course.students.add(student)  # Añadir estudiante al curso
            return Response({'status': 'Estudiante matriculado exitosamente'})
        except Student.DoesNotExist:
            return Response({'error': 'Estudiante no encontrado'}, status=status.HTTP_404_NOT_FOUND)

