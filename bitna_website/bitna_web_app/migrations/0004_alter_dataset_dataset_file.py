# Generated by Django 3.2.8 on 2021-11-03 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bitna_web_app', '0003_auto_20211102_2040'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dataset',
            name='dataset_file',
            field=models.FileField(upload_to='uploads/'),
        ),
    ]
