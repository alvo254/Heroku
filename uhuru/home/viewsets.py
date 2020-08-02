from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from users.models import User
from rest_framework import viewsets
from .serializers import UserSerializer, SongSerializer, MoodPlaylistSerializer
from home.models import SongItem, Playlist


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

class RecentViewSet(viewsets.ModelViewSet):
    """
    Endpoint for users to be viewed or edited
    """
    queryset = SongItem.objects.order_by('-date_posted')
    serializer_class = SongSerializer

class TrendingViewSet(viewsets.ModelViewSet):
    """
    Endpoint for users to be viewed or edited
    """
    queryset = SongItem.objects.order_by('-play_count')
    serializer_class = SongSerializer


class MoodPlaylistViewSet(viewsets.ModelViewSet):
    """
    Endpoint for users to be viewed or edited
    """
    queryset = Playlist.objects.filter(item_type="songs", chart="mood")
    serializer_class = MoodPlaylistSerializer


class WeeklyPlaylistViewSet(viewsets.ModelViewSet):
    """
    Endpoint for users to be viewed or edited
    """
    queryset = Playlist.objects.filter(item_type="songs", chart="weekly")
    serializer_class = MoodPlaylistSerializer
