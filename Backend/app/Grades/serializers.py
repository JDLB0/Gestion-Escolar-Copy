from rest_framework import serializers

from ..Grades.models import Grade
from ..Students.models import Student
from ..Evaluations.models import Evaluation
from ..Students.serializers import StudentSerializer 
from ..Evaluations.serializers import EvaluationSerializer

# class GradeSerializer(serializers.ModelSerializer):
#     student = StudentSerializer(read_only=True)
#     evaluation = EvaluationSerializer(read_only=True)
    
#     # Opcional: Permitir asignar por ID en lugar de anidar todo el objeto
#     student_id = serializers.PrimaryKeyRelatedField(
#         queryset=Student.objects.all(), source='student', write_only=True
#     )
#     evaluation_id = serializers.PrimaryKeyRelatedField(
#         queryset=Evaluation.objects.all(), source='evaluation', write_only=True
#     )

#     class Meta:
#         model = Grade
#         fields = ['id', 'student', 'evaluation', 'grade', 'evaluation_date', 'student_id', 'evaluation_id']


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ['id', 'student', 'course', 'grade', 'evaluation_date']

class CreateGradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ['student', 'course', 'grade', 'evaluation_date']