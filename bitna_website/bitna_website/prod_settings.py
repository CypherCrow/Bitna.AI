import django_heroku

from .settings import * 

DEBUG = False
SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', SECRET_KEY)
ALLOWED_HOSTS = ['bitna.ai.herokuapp.com']
django_heroku.settings(locals())