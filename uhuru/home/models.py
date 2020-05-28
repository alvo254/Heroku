from django.db import models
from audiofield.fields import AudioField


class Album(models.Model):
    album_title = models.CharField(max_length=250)
    album_artist = models.CharField(max_length=250)


class Song(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    song = AudioField(upload_to='Users/alvin/Project/free/uhuru/songdir')
    song_title = models.CharField(max_length=250)
    audio_file = models.FileField(default='')

    def __str__(self):
        return self.song_title



