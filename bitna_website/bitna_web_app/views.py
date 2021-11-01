#from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.shortcuts import render
from django.template import loader

from rest_framework.views import APIView 
from rest_framework.response import Response

from .models import Dataset
from .serializers import DatasetSerializer

# Create your views here.
def index(request): 
    dataset_list = Dataset.objects.order_by('-pub_date')
    template = loader.get_template('bitna_web_app/index.html')
    context = {
        'dataset_list': dataset_list,
    }
    return HttpResponse(template.render(context, request))

class Datasets(APIView): 
    def get(self, request, format=None):
        datasets = Dataset.objects.all()
        serializer = DatasetSerializer(datasets, many=True)
        return Response(serializer.data)

'''def detail(request, dataset_id): 
    try: 
       dataset = Dataset.objects.get(pk=dataset_id)
    except Dataset.DoesNotExist:
        raise Http404("Dataset does not exist")
    return render(request, 'bitna_web_app/detail.html', { 'dataset': dataset })
'''

