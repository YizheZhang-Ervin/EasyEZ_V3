from django.db import models

# Create your models here.
class Blog(models.Model):
    nid = models.AutoField(primary_key=True)
    main_title = models.CharField(max_length=50, verbose_name='main_title', editable=True)
    sub_title = models.CharField(max_length=50, verbose_name='sub_title', editable=True)
    # email = models.EmailField(db_index=True)
    # img = models.ImageField(upload_to='static/upload')
    content = models.TextField()
    article_type_choices = (
        (0, "Python"),
        (1, "FrontEnd"),
        (2, "Other"),
    )
    article_type = models.IntegerField(choices=article_type_choices, default=0)

    def __str__(self):
        return self.main_title

class Msg(models.Model):
    mid = models.AutoField(primary_key=True)
    time = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=50, verbose_name='username', editable=True)
    tags = models.CharField(max_length=30, verbose_name='tags', editable=True)
    content = models.TextField()

    def __str__(self):
        return self.name