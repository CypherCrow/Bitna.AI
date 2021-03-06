#from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from django.shortcuts import render
from django.template import loader

from rest_framework.views import APIView 
from rest_framework.response import Response

import json

#from bitna_website.static.tutorial import get_predictions

from .apps import BitnaWebAppConfig

from .models import Dataset
from .serializers import DatasetSerializer

# Create your views here.
def index(request): 
    dataset_list = Dataset.objects.order_by('-pub_date')
    template = loader.get_template('templates/bitna_web_app/index.html')
    context = {
        'dataset_list': dataset_list,
    }
    return HttpResponse(template.render(context, request))


def dataset_upload(request):
    if request.method == "POST":

        data = json.loads(request.body)
        dataset_file = data['dataset_file']
        dataset_name = data['dataset_name']

        if dataset_file and dataset_name:
            response = f"Submitted dataset {dataset_name}"
            return JsonResponse({ "msg": response }, status=201)

        else: 
            response = "Dataset or username is empty"
            return JsonResponse({ "err": response }, status=400)

    return render(request, 'dataset-submit.html')

# TO BE IMPLEMENTED IN FUTURE
'''def run_model(request): 
    predicted = None
    actual = None
    
    try:
        predicted, actual = get_predictions()
    except RuntimeError as re: 
        print(re)

    context = {
        'Predicted classes' : predicted,
        'Actual': actual
    }

    return context'''

class Datasets(APIView): 
    def get(self, request, format=None):
        datasets = Dataset.objects.all()
        serializer = DatasetSerializer(datasets, many=True)
        return Response(serializer.data)

class CallModel(APIView): 
    def get(self, request):
        if request.method == 'GET': 
            params = request.GET.get('image_path')
            response = BitnaWebAppConfig.predictor.predict(params)

            return JsonResponse(response)

'''def detail(request, dataset_id): 
    try: 
       dataset = Dataset.objects.get(pk=dataset_id)
    except Dataset.DoesNotExist:
        raise Http404("Dataset does not exist")
    return render(request, 'bitna_web_app/detail.html', { 'dataset': dataset })
'''

