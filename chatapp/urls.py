from django.urls import path
from .views import ask_bot, home

urlpatterns = [
    path("", home),
    path("ask/", ask_bot),
]
