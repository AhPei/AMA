from django.urls import path
from . import views

urlpatterns = [
    path('signin', views.SignIn), # Post
    path('signup', views.SignUp), # Post
    path('signout', views.SignOut), # Get
    path('updateUser', views.UpdateUser), # POST
    path('checkLogin', views.CheckLogin), # Get
]
