# Generated by Django 3.2.8 on 2021-10-27 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dataset',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dataset', models.CharField(max_length=200)),
                ('user', models.CharField(max_length=200)),
                ('pub_date', models.DateTimeField(verbose_name='Date published')),
            ],
        ),
    ]