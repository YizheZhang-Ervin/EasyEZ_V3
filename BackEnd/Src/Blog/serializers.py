from rest_framework import serializers
from .models import Blog,Msg

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('nid','main_title','sub_title','content','article_type')

class MsgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Msg
        fields = ('mid','time','name','tags','content')