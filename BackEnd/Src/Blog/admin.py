from django.contrib import admin

# Register your models here.
from .models import Blog,Msg

admin.site.register(Blog)
admin.site.register(Msg)