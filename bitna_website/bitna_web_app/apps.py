from django.apps import AppConfig
import html
import pathlib
import os


class BitnaWebAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'bitna_web_app'
    MODEL_PATH = os.path("model")
    BITNA_WEB_APP_PRETRAINED_PATH = os.path('model/pretrained/')
    LABEL_PATH = os.path("label/")

