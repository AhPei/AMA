from .EssayPrediction import predict

from django.shortcuts import render
from django.http import JsonResponse, QueryDict
from rest_framework import status
from api.firebase import storage
import pickle

from django.views.decorators.csrf import csrf_exempt
import os
import logging

@csrf_exempt
def Upload(request):
  if request.method != "POST":
    return JsonResponse({"Message":"Mehtod Not Allowed"}, status=status.HTTP_409_CONFLICT)

  try:
    # storage.child("csv/dataset2.csv").put("import/Img/dataset2.csv") # Upload
    # storage.download("minion.jpg", "minion.jpg") # Download

    return JsonResponse({"Message":"Uploaded"}, status=status.HTTP_200_OK)
  except:
    return JsonResponse({"Message":"Fail to upload"}, status=status.HTTP_400_BAD_REQUEST)

from PyPDF2 import PdfReader

def getPDFContent(path):
  reader = PdfReader(path)
  number_of_pages = len(reader.pages)
  page = reader.pages[0]
  text = page.extract_text()
  return text

@csrf_exempt
def getPredictions(request):
  request_file = request.FILES['file'] if 'file' in request.FILES else None
  if request_file:
    text = getPDFContent(request_file)
    prediction = predict(text)
    if prediction <= 2:
      grade = "Bad"
    elif prediction <= 3:
      grade = "Average"
    elif prediction <= 4:
      grade = "Good"

    return JsonResponse({"Grade": grade}, status=status.HTTP_200_OK)
