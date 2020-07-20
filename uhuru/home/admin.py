from django.contrib import admin
from .models import (
    Song, Album,
    VideoItem, VideoCommentItem,
    SongItem, 
    BlogItem, BlogCommentItem,
    PodcastItem, Playlist, Featured
)


list_display = ['song_title', 'audio_file']
admin.site.register(Song)
admin.site.register(Album)
admin.site.register(VideoItem)
admin.site.register(VideoCommentItem)
admin.site.register(SongItem)
admin.site.register(BlogItem)
admin.site.register(BlogCommentItem)
admin.site.register(PodcastItem)
admin.site.register(Playlist)
admin.site.register(Featured)


