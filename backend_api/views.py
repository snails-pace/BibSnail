from django.shortcuts import render
from .serializers import *
from .models import Book, Profile
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


# Create your views here.

# class ProfileView(viewsets.ModelViewSet):
#     serializer_class = ProfileSerializer
#     queryset = Profile.objects.all()

# class BookView(viewsets.ModelViewSet):
#     serializer_class = BookSerializer
#     queryset = Book.objects.all()

@api_view(['GET', 'POST'])
def book_list(request):
    if request.method == 'GET':
        books = Book.objects.all()
        
        serializer = BookSerializer(books, context={'request': request}, many=True)
        return Response(serializer.data) 
    
    
@api_view(['PUT', 'DELETE'])
def book_detail(request, pk):
    pass