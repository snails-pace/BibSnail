from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from backend_api.models import Book, Profile, User

#Register your models here.
@admin.register(User)
class UserAdmin(UserAdmin):
    """Registering User to admin with username ordering and 10 entries per page"""
    
    ordering =['username']
    list_per_page = 10
    
    
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    """Registering Profile to admin with nickname ordering and 10 entries per page"""
    
    list_display = ['id', 'nickname']
    list_editable = ['nickname']
    ordering = ['nickname']
    list_per_page = 10
    

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    """Registering Profile to admin with title ordering and 10 entries per page"""

    list_display = ['id', 'title', 'author', 'publisher', 'address', 'edition', 'year', 'genre', 'owner', 'location', 'borrowed_from', 'comments']
    list_editable = ['title', 'author', 'publisher', 'address', 'edition', 'year', 'genre', 'owner', 'location', 'borrowed_from', 'comments']
    ordering = ['title']
    list_per_page = 10