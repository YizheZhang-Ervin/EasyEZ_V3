from Blog.models import Blog,Msg
from .serializers import BlogSerializer,MsgSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import render

class BlogViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    # queryset = Blog.objects.all()
    queryset = Blog.objects.order_by('-nid')


class MsgViewSet(viewsets.ModelViewSet):
    serializer_class = MsgSerializer
    queryset = Msg.objects.order_by('-time')

def index(request):
    return render(request, 'index.html')