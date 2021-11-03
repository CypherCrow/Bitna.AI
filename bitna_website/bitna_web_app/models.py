from django.db import models
from django.utils import timezone

import datetime


# Create your models here.

class Dataset(models.Model): 
    dataset_file = models.CharField(max_length=200)
    user = models.CharField(max_length=200)
    pub_date = models.DateTimeField('Date published')

    class Meta: 
        ordering = ('dataset_file',)

    def __str__(self): 
        return self.dataset_file

    def get_abosolute_url(self):
        return f'/{self.slug}/' # slug = URL address of the dataset

    def was_published_recently(self): 
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
        