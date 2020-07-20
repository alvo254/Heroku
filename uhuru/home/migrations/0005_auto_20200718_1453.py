# Generated by Django 3.0.6 on 2020-07-18 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20200718_1424'),
    ]

    operations = [
        migrations.AddField(
            model_name='songitem',
            name='album_art',
            field=models.FileField(blank=True, null=True, upload_to='album art'),
        ),
        migrations.AlterField(
            model_name='featured',
            name='item_type',
            field=models.CharField(choices=[('blog', 'blog'), ('songs', 'song'), ('video', 'video'), ('podcast', 'podcast')], default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='playlist',
            name='item_type',
            field=models.CharField(choices=[('blog', 'blog'), ('songs', 'song'), ('video', 'video'), ('podcast', 'podcast')], default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='videoitem',
            name='category',
            field=models.CharField(choices=[('movie', 'movie'), ('program', 'program'), ('production', 'production'), ('sermon', 'sermon')], max_length=10),
        ),
    ]
