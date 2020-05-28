from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('music/', views.music, name='music'),
    path('blog/', views.blog, name='blog'),
    path('about/', views.about, name='about'),
    path('misc/', views.about, name='misc'),

]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)