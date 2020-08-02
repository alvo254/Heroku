"""uhuru URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import include

from django.contrib import admin
from django.urls import path
from  rest_framework import routers
from  home import viewsets

router = routers.DefaultRouter()
router.register(r'song', viewsets.SongViewSet)
router.register(r'user', viewsets.UserViewSet)
router.register(r'mood-playlists', viewsets.MoodPlaylistViewSet)
router.register(r'weekly-playlists', viewsets.WeeklyPlaylistViewSet, "weekly")
router.register(r'recent', viewsets.RecentViewSet, "recent")
router.register(r'trending', viewsets.TrendingViewSet, "trending")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('user/', include('users.urls')),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
