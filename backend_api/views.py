from django.shortcuts import get_object_or_404, render
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

@api_view(['GET'])
def book_list(request):
    """
    Book list endpoint
    GET: get all books and returns the serialized list 
    (native Python datatype, that can be transformed to JSON)
    """
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, context={'request': request}, many=True)
        
        
        return Response(serializer.data) 
    
    
@api_view(['GET'])
def book_detail_view(request, pk):
    book = get_object_or_404(Book, id=pk)
    serializer = BookSerializer(book, context={'request': request, 'pk': pk})
    
    return Response(serializer.data)