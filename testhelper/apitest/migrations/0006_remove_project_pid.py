# Generated by Django 3.1.7 on 2021-07-22 12:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apitest', '0005_auto_20210722_1054'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='pid',
        ),
    ]