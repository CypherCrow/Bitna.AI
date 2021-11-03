from rest_framework import serializers

from .models import Dataset 

class DatasetSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Dataset
        fields = (
            "id", 
            "dataset_name",
            "dataset_file", 
            "pub_date"
        )