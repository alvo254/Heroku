from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from users.models import User
from rest_framework import viewsets
from .serializers import UserSerializer , SongSerializer
from home.models import SongItem

def index(request):
    return render(request, template_name="index.html")


def music(request):
    
    # !return render(request, template_name="music.html")
    return render(request, template_name="music-react.html")


def blog(request):
    return render(request, template_name='blog.html')


def about(request):
    return render(request, template_name='about.html')


def misc(request):
    return render(request, template_name='misc.html')


def podcast(request):
    return render(request, template_name='podcast.html')


def episodes(request):
    return render(request, template_name='episodes.html')
