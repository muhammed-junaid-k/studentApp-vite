from django.shortcuts import render
from django.http import HttpResponse
from .models import Student
from .serializers import StudentSerializer
from rest_framework import viewsets   
# Create your views here.


class StudentView(viewsets.ModelViewSet):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer