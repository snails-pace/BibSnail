from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BookSerializer, ProfileSerializer
from .models import Book, Profile

# Create your views here.

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()