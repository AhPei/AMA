from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    # path('create', index),
    path('login', index),
    path('signup', index),
    path('contact', index),
    path('manageaccount', index),
]