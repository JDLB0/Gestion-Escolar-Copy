from django.db import models

# Create your models here.

from django.db import models
from app.Users.models import User

class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = models.DateField()
    
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)  # Se restringe a opciones
    
    address = models.TextField()
    phone_number = models.CharField(max_length=15)
    department = models.CharField(max_length=50)
    hire_date = models.DateField()

    def __str__(self):
        return self.user.get_full_name()