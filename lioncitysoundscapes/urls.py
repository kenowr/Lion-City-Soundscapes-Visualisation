from django.urls import path
from . import views


# URLConf
urlpatterns = [
    path('about/', views.about_page)
]