# Generated by Django 3.2.8 on 2021-11-03 09:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bitna_web_app', '0004_alter_dataset_dataset_file'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dataset',
            old_name='user',
            new_name='name',
        ),
    ]
