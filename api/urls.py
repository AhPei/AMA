from django.urls import path
from . import views

urlpatterns = [
    path('signin', views.SignIn),
    path('signup', views.SignUp),
    path('signout', views.SignOut),
    path('checkLogin', views.CheckLogin),
    # path('save', views.saveData),
    # path('signt', views.SignTEST),
]
