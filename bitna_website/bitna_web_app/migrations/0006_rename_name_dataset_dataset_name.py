# Generated by Django 3.2.8 on 2021-11-03 09:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bitna_web_app', '0005_rename_user_dataset_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dataset',
            old_name='name',
            new_name='dataset_name',
        ),
    ]