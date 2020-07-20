from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from users.models import User
from rest_framework import viewsets
from .serializers import UserSerializer , SongSerializer
from home.models import SongItem


class UserViewSet(viewsets.ModelViewSet):
    """
    Endpoint for users to be viewed or edited
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SongViewSet(viewsets.ModelViewSet):
    """
    Endpoint for users to be viewed or edited
    """
    queryset = SongItem.objects.all()
    serializer_class = SongSerializer