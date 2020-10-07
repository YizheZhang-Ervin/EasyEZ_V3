from Blog.models import Blog,Msg
from .serializers import BlogSerializer,MsgSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class BlogViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()


class MsgViewSet(viewsets.ModelViewSet):
    serializer_class = MsgSerializer
    queryset = Msg.objects.order_by('-time')