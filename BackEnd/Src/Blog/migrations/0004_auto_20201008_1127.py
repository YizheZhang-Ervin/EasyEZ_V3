# Generated by Django 3.1.2 on 2020-10-08 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Blog', '0003_auto_20201007_1132'),
    ]

    operations = [
        migrations.AlterField(
            model_name='msg',
            name='tags',
            field=models.CharField(max_length=30, verbose_name='tags'),
        ),
    ]