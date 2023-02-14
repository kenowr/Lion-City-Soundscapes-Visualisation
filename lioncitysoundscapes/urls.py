from django.urls import path
from . import views


# URLConf
urlpatterns = [
    path('about/', views.about_page, name='about'),
    path('map/', views.map_page, name='map')
]