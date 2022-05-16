from django.shortcuts import render
from rest_framework import generics, status
from django.http import JsonResponse, HttpResponse, HttpResponseNotFound, HttpRequest
from .forms import UserForm

# Firebase
config = {
  "apiKey": "AIzaSyBRjbqI1LC63Rd74leb4vSoXdY4swr8t7w",
  "authDomain": "automated-marking-assessment.firebaseapp.com",
  "databaseURL": "https://automated-marking-assessment-default-rtdb.asia-southeast1.firebasedatabase.app",
  "projectId": "automated-marking-assessment",
  "storageBucket": "automated-marking-assessment.appspot.com",
  "messagingSenderId": "47145472074",
  "appId": "1:47145472074:web:0691fdc1aaf5c5328396b3",
  "measurementId": "G-26Y8C4XN2D"
}

# Firebase Authentication
import pyrebase
firebase = pyrebase.initialize_app(config)
authe = firebase.auth()
# Get a reference to the database service
db = firebase.database()


from django.views.decorators.csrf import csrf_exempt

# Sign in
def SignIn(request):
  if request.method != "POST":
    return JsonResponse({"Message":"Mehtod Not Allowed"}, status=status.HTTP_400_BAD_REQUEST)
  
  # If User has Logged In 
  if authe.current_user:
    return JsonResponse({"Message":"User has Logged In"}, status=status.HTTP_200_OK)

  # Form Validation - validate the input value with UserForm
  form = UserForm(request.POST or None)
  if form.is_valid():
    email = request.POST.get('email')
    password = request.POST.get('password')
    uname = request.POST.get('uname')
    fname = request.POST.get('fname')
    lname = request.POST.get('lname')
    phone = request.POST.get('phone')
    try:
      authe.sign_in_with_email_and_password(email, password)
      return JsonResponse({"Message":"Log In Successfully"}, status=status.HTTP_200_OK)
    except:
      return JsonResponse({"Message":"Inccorrect Email or Password"}, status=status.HTTP_400_BAD_REQUEST)
  
  return JsonResponse({"Message":"Invalid Format"}, status=status.HTTP_400_BAD_REQUEST)

# Sign Up
def SignUp(request):
  if request.method != "POST":
    return JsonResponse({"Message":"Mehtod Not Allowed"}, status=status.HTTP_400_BAD_REQUEST)
  
  form = UserForm(request.POST or None)
  if form.is_valid():
    email = request.POST.get('email')
    password = request.POST.get('password')
    try:
      print("let do this")
      user = authe.create_user_with_email_and_password(email, password)
      print(user)
      # print(user['uid'])
      ref = db.reference('/users')
      ref.set({
        user['localId']: {
          'uname': request.POST.get('uname'),
          'fname': request.POST.get('fname'),
          'lname': request.POST.get('lname'),
          'phone': request.POST.get('phone'),
        }
      })
      return JsonResponse({"Message":"Create User Successfully"}, status=status.HTTP_200_OK)
    except:
      return JsonResponse({"Message":"Email Existed"}, status=status.HTTP_400_BAD_REQUEST)
  
  return JsonResponse({"Message":"Invalid Format"}, status=status.HTTP_400_BAD_REQUEST)

# Sign Out
def SignOut(request):
  authe.current_user = None
  if not authe.current_user: 
    return JsonResponse({"Message":"User Sign Out"}, status=status.HTTP_200_OK)
  return JsonResponse({"Message":"Failed to sign out"}, status=status.HTTP_400_BAD_REQUEST)
  
# Check Login
def CheckLogin(request):
  if authe.current_user:
    return JsonResponse({"Message":"User Logged In"}, status=status.HTTP_200_OK)
  return JsonResponse({"Message":"User Not LogIn"}, status=status.HTTP_400_BAD_REQUEST)

import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import os
from controller.settings import BASE_DIR

# Fetch the service account key JSON file contents
cred = credentials.Certificate(os.path.join(BASE_DIR, 'automated-marking-assessment-firebase-adminsdk-wc3vg-f6c649ebcd.json'))

# Initialize the app with a custom auth variable, limiting the server's access
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://automated-marking-assessment-default-rtdb.asia-southeast1.firebasedatabase.app',
    'databaseAuthVariableOverride': {
        'uid': 'my-service-worker'
    }
})



# # TESTING
# @csrf_exempt
# def saveData(request):
#   try:
#     # # The app only has access as defined in the Security Rules
#     ref = db.reference('/user')
#     ref.set({
#       'uname': "ahpei",
#       'fname': "goh",
#       'lname': "pei sheng",
#       'phone': '0163120621',
#     })

#     return JsonResponse({"Message":"Everything Saved"}, status=status.HTTP_200_OK)
#   except:
#     return JsonResponse({"Message":"Failed to upload"}, status=status.HTTP_400_BAD_REQUEST)

# # JSON FORMAT
# import json
# def JSON(body):
#   body = json.loads(body)
#   return body

# @csrf_exempt
# def SignTEST(request):
#   if request.method != "POST":
#     print(JSON(request.body)['email'])
#     return JsonResponse({"Message:":"Create User Successfully"}, status=status.HTTP_200_OK)

# # Signup
# uid = user['localId']
# data = {
#   "email": email,
#   "status": 1,
# }
# database.child("users").child(uid).child("details").set(data)
# # -----------------------------
# # Pass the user's idToken to the push method
# # results = db.child("users").push(userData, user['idToken']) 

# user = auth.sign_in_with_email_and_password(email, password)
# # before the 1 hour expiry:
# user = auth.refresh(user['refreshToken'])

# # now we have a fresh token
# user['idToken']

# # Premium Account 
# token_with_additional_claims = auth.create_custom_token("your_custom_id", {"premium_account": True})

# # You can then send these tokens to the client to sign in, or sign in as the user on the server.
# user = auth.sign_in_with_custom_token(token)

# # Verifying emails
# auth.send_email_verification(user['idToken'])
# # Sending password reset emails
# auth.send_password_reset_email("email")
# # Get account information
# auth.get_account_info(user['idToken'])
# # Refreshing tokezns
# user = auth.refresh(user['refreshToken'])