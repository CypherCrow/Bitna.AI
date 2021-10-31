#from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.shortcuts import render
from django.template import loader

from .models import Dataset

# Create your views here.
def index(request): 
    dataset_list = Dataset.objects.order_by('-pub_date')
    template = loader.get_template('bitna_web_app/index.html')
    context = {
        'dataset_list': dataset_list,
    }
    return HttpResponse(template.render(context, request))

def detail(request, dataset_id): 
    try: 
       dataset = Dataset.objects.get(pk=dataset_id)
    except Dataset.DoesNotExist:
        raise Http404("Dataset does not exist")
    return render(request, 'bitna_web_app/detail.html', { 'dataset': dataset })