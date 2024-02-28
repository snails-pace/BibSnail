from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext as _

# Create your models here.
class User(AbstractUser):
    """ User model with username as string representation
    Fields email and username have to be unique
    """
    # username = models.CharField(max_length=50, unique=True)
    # email = models.EmailField(max_length=254, unique=True)
    
    def __str__(self):
        return self.username
    
    

class Profile(models.Model):
    """ Profile model with nickname as string representation
    References to the User model in the user field
    owner: states who owns the book
    location: where is the book (at home, lend it to someone...)
    """
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nickname
    
    class Meta:
        ordering = ['nickname']
    

# class Genre(models.Model):
#     """ Genre model with name as string representation
   
#     """
#     name = models.CharField(max_length=254)
    
#     def __str__(self):
#         return self.name
    
#     class Meta:
#         ordering = ['name']
    
    
class Book(models.Model):
    """ Book model with title as string representation
    References the Genre model in the 'genre' field

    """
    title = models.CharField(max_length=254)
    author = models.CharField(max_length=254, blank=True)
    publisher = models.CharField(max_length=254, blank=True)
    address = models.CharField(max_length=254, blank=True)
    edition = models.PositiveIntegerField(null=True, blank=True)
    year = models.DateField(null=True, blank=True)
    genre = models.CharField(max_length=254, default="other")
    owner = models.BooleanField()
    location = models.CharField(max_length=254, default="home")
    borrowed_from = models.CharField(max_length=254, blank=True)
    comments = models.TextField(blank=True)
    
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['title']