from django.shortcuts import render
from django.http import JsonResponse, QueryDict
from rest_framework import status
from api.firebase import storage

from django.views.decorators.csrf import csrf_exempt
import os

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