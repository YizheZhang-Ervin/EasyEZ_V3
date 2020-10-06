from rest_framework import serializers
from Blog.models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('nid','main_title','sub_title','content','article_type')