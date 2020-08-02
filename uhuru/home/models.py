from django.db import models
# from audiofield import AudioField
from datetime import datetime


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


class VideoItem(models.Model):
    CHOICES = {
        ("sermon", "sermon"),
        ("movie", "movie"),
        ("program", "program"),
        ("production", "production"),
    }

    title = models.CharField(max_length=200)
    uploader = models.ForeignKey(
        "users.user", on_delete=models.SET_NULL, null=True)
    uploaded_file = models.FileField(upload_to="video")
    url = models.URLField()
    category = models.CharField(max_length=10, choices=CHOICES)
    date_posted = models.DateTimeField(default=datetime.now)


class VideoCommentItem(models.Model):
    video = models.ForeignKey(VideoItem, on_delete=models.CASCADE)
    remarks = models.TextField()
    author = models.ForeignKey('users.user', on_delete=models.CASCADE)


class SongItem(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=100)
    featuring = models.CharField(max_length=200, blank=True)
    album = models.CharField(max_length=100)
    album_art = models.FileField(
        upload_to="album art", default="default art.png", blank=True, null=True)
    year = models.IntegerField()
    uploader = models.ForeignKey(
        "users.user", on_delete=models.SET_NULL, null=True)
    uploaded_file = models.FileField(upload_to="song", blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    play_count = models.IntegerField(default=0)
    date_posted = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return f'{self.artist}-{self.title}'


class BlogItem(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    author = models.ForeignKey('users.user', on_delete=models.CASCADE)
    date_modified = models.DateTimeField()
    date_posted = models.DateTimeField(default=datetime.now)


class BlogCommentItem(models.Model):
    blog = models.ForeignKey(BlogItem, on_delete=models.CASCADE)
    remarks = models.TextField()
    author = models.ForeignKey('users.user', on_delete=models.CASCADE)
    date_posted = models.DateTimeField(default=datetime.now)


class PodcastItem(models.Model):
    title = models.CharField(max_length=200)
    uploaded_file = models.FileField(upload_to="podcast")
    url = models.URLField()
    uploader = models.ForeignKey('users.user', on_delete=models.CASCADE)
    date_posted = models.DateTimeField(default=datetime.now)


class Playlist(models.Model):
    CHOICES = {
        ("video", "video"),
        ("songs", "songs"),
        ("blog", "blog"),
        ("podcast", "podcast"),
    }
    CHART_CHOICES = {
        ("mood", "mood"),
        ("weekly", "weekly"),
    }
    item_type = models.CharField(max_length=10, choices=CHOICES, default="")
    chart = models.CharField(max_length=10, choices=CHART_CHOICES, default="")
    name = models.CharField(max_length=100)
    user = models.ForeignKey('users.user', on_delete=models.CASCADE)
    video_items = models.ManyToManyField(VideoItem, blank=True)
    song_items = models.ManyToManyField(SongItem, blank=True)
    blog_items = models.ManyToManyField(BlogItem, blank=True)
    padcast_items = models.ManyToManyField(PodcastItem, blank=True)

    def __str__(self):
        return self.name


class Featured(models.Model):
    CHOICES = {
        ("video", "video"),
        ("songs", "song"),
        ("blog", "blog"),
        ("podcast", "podcast"),
    }
    item_type = models.CharField(max_length=10, choices=CHOICES, default="")
    date_featured = models.DateField()
    day_count = models.IntegerField()
