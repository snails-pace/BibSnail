from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'publisher', 'address', 'edition', 'year', 'genre', 'owner', 'location', 'borrowed_from', 'comments')
        