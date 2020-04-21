from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return render(request, template_name="index.html")


def music(request):
    return render(request, template_name="music.html")


def blog(request):
    return render(request, template_name='blog.html')
