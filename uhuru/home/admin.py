from django.contrib import admin
from .models import Song, Album


list_display = ['song_title', 'audio_file']
admin.site.register(Song)
admin.site.register(Album)


