# Generated by Django 3.2.8 on 2021-11-01 21:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bitna_web_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='dataset',
            options={'ordering': ('dataset',)},
        ),
    ]
