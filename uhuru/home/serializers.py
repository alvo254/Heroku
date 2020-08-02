from django.contrib.auth.models import User
from users.models import User
from rest_framework import serializers
from home.models import SongItem, Playlist


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name',
                  'username', 'is_staff', 'is_active')


class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SongItem
        fields = ('id', 'title', 'artist', 'album',
                  'featuring', 'year', 'url', 'album_art')


class MoodPlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = ('id', 'name')