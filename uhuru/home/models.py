from django.db import models
# from audiofield import AudioField
import datetime from datetime


class Album(models.Model):
    album_title = models.CharField(max_length=250)
    album_artist = models.CharField(max_length=250)


class Song(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    # song = AudioField(upload_to='Users/alvin/Project/free/uhuru/songdir')
    song_title = models.CharField(max_length=250)
    audio_file = models.FileField(default='')

    def __str__(self):
        return self.song_title

class AppItem(models.Model):
    CHOICES = {
        "video": "video",
        "songs": "song",
        "blog": "blog",
        "podcast": "podcast",
    }
    item_type = models.CharField(max_length=10, choices=CHOICES)
    date_posted = models.DateTimeField(default=datetime.now)

class VideoItem(models.Model):
    CHOICES = {
        "sermon": "sermon",
        "movie": "movie",
        "program": "program",
        "production": "production",
    }

    app_item = models.OneToOneField(AppItem, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    uploader = models.ForeignKey("users.user", on_delete=models.SET_NULL, null=True)
    uploaded_file = models.FileField(upload="video")
    url = models.URLField()
    category = models.CharField(max_length=10, choices=CHOICES)

class VideoCommentItem(models.Model):
    video = models.ForeignKey(VideoItem, on_delete=models.CASCADE)
    remarks = models.TextField()
    author = models.ForeignKey('users.user')


class SongItem(models.Model):
    app_item = models.OneToOneField(AppItem, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=100)
    featuring = models.CharField(max_length=200, blank=True)
    album = models.CharField(max_length=100)
    year = models.IntegerField()
    uploader = models.ForeignKey("users.user", on_delete=models.SET_NULL, null=True)
    uploaded_file = models.FileField(upload="song")
    url = models.URLField()
    play_count = models.IntegerField(default=0)


class BlogItem(models.Model):
    app_item = models.OneToOneField(AppItem, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    body = models.TextField()
    author = models.ForeignKey('users.user', on_delete=models.CASCADE)
    date_modified = models.DateTimeField()


class BlogCommentItem(models.Model):
    blog = models.ForeignKey(BlogItem, on_delete=models.CASCADE)
    remarks = models.TextField()
    author = models.ForeignKey('users.user')
    date_posted = models.DateTimeField(default=datetime.now)

class PodcastItem(models.Model):
    app_item = models.OneToOneField(AppItem, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    uploaded_file = models.FileField(upload="podcast")
    url = models.URLField()
    uploader = models.ForeignKey('users.user', on_delete=models.CASCADE)

class  Playlist(models.Model):
    name = models.CharField(max_length=100)\
    user = models.ForeignKey('users.user', on_delete=models.CASCADE)
    app_item = models.ManyToManyField(AppItem)

class Featured(models.Model):
    app_item = models.OneToOneField(AppItem, on_delete=models.CASCADE)
    date_featured = models.DateField()
    day_count = models.IntegerField()