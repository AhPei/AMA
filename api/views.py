from django.shortcuts import render
from rest_framework import generics, status
from django.http import HttpResponse, HttpResponseNotFound, HttpRequest, JsonResponse, QueryDict
from django.views.decorators.csrf import csrf_exempt
from .forms import UserForm, UserLoginForm
from .firebase import authe, database

# Sign in
@csrf_exempt
def SignIn(request):
  if request.method != "POST":
    return JsonResponse({"Message":"Mehtod Not Allowed"}, status=status.HTTP_409_CONFLICT)
  # If User has Logged In 
  if authe.current_user:
    return JsonResponse({"Message":"User has Logged In"}, status=status.HTTP_200_OK)

  # Form Validation - validate the input value with UserForm
  form = UserLoginForm(request.POST or None)
  if form.is_valid():
    email = request.POST.get('email')
    password = request.POST.get('password')
    try:
      authe.sign_in_with_email_and_password(email, password)
      return JsonResponse({"Message":"Log In Successfully"}, status=status.HTTP_200_OK)
    except:
      return JsonResponse({"Message":"Inccorrect Email or Password"}, status=status.HTTP_400_BAD_REQUEST)

  return JsonResponse({"Message":"Invalid Format"}, status=status.HTTP_400_BAD_REQUEST)

# Sign Up
@csrf_exempt
def SignUp(request):
  if request.method not in {"POST"}:
    return JsonResponse({"Message":"Mehtod Not Allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

  form = UserForm(request.POST or None)
  if not form.is_valid():
    return JsonResponse({"Message":"Invalid Format"}, status=status.HTTP_400_BAD_REQUEST)

  email = request.POST.get('email')
  password = request.POST.get('password')
  try:
    user = authe.create_user_with_email_and_password(email, password)
    userData = {
      'uname': request.POST.get('uname'),
      'fname': request.POST.get('fname'),
      'lname': request.POST.get('lname'),
      'phone': request.POST.get('phone'),
    }
    database.child("users").child(user['localId']).set(userData)
    return JsonResponse({"Message":"Create User Successfully"}, status=status.HTTP_201_CREATED)
  except:
    return JsonResponse({"Message":"Email Already Existed"}, status=status.HTTP_409_CONFLICT)

# Update User
@csrf_exempt
def UpdateUser(request):
  if request.method not in {"POST"}:
    return JsonResponse({"Message":"Mehtod Not Allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

  form = UserForm(request.POST or None)
  if not form.is_valid():
    return JsonResponse({"Message":"Invalid Format"}, status=status.HTTP_400_BAD_REQUEST)

  email = request.POST.get('email')
  password = request.POST.get('password')
  try:
    user = authe.current_user
    userData = {
      'uname': request.POST.get('uname'),
      'fname': request.POST.get('fname'),
      'lname': request.POST.get('lname'),
      'phone': request.POST.get('phone'),
    }
    database.child("users").child(user['localId']).update(userData)
    return JsonResponse({"Message":"Update User Successfully"}, status=status.HTTP_201_CREATED)
  except:
    return JsonResponse({"Message":"You are not login"}, status=status.HTTP_409_CONFLICT)

# Logout
def SignOut(request):
  if request.method != "GET":
    return JsonResponse({"Message":"Method Not Allowed"}, status=status.HTTP_409_CONFLICT)
  authe.current_user = None
  if not authe.current_user: 
    return JsonResponse({"Message":"User Sign Out"}, status=status.HTTP_200_OK)
  return JsonResponse({"Message":"Failed to sign out"}, status=status.HTTP_400_BAD_REQUEST)

# Check Login
def CheckLogin(request):
  if authe.current_user:
    return JsonResponse({"Message":"User Logged In"}, status=status.HTTP_200_OK)
  return JsonResponse({"Message":"User Not LogIn"}, status=status.HTTP_400_BAD_REQUEST)