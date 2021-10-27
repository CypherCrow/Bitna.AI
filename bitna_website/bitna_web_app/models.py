from django.db import models

# Create your models here.

class Dataset(models.Model): 
    dataset = models.CharField(max_length=200)
    user = models.CharField(max_length=200)
    pub_date = models.DateTimeField('Date published')