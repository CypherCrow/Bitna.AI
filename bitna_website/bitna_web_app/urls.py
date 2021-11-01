from django.urls import path, include

from bitna_web_app import views

urlpatterns = [
    path('', views.index, name='index'), 
    path('api/datasets', views.Datasets.as_view())
] 