from django.urls import path
from . import views

urlpatterns = [
  path('', views.Upload),
  path('result', views.getPredictions),
]
