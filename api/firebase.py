import pyrebase

# Firebase Config
config = {
  "apiKey": "AIzaSyBRjbqI1LC63Rd74leb4vSoXdY4swr8t7w",
  "authDomain": "automated-marking-assessment.firebaseapp.com",
  "databaseURL": "https://automated-marking-assessment-default-rtdb.asia-southeast1.firebasedatabase.app",
  "serviceAccount": "automated-marking-assessment-firebase-adminsdk-wc3vg-f6c649ebcd.json",
  "storageBucket": "automated-marking-assessment.appspot.com",
}

firebase = pyrebase.initialize_app(config)

authe = firebase.auth() # Authentication
database = firebase.database() # Realtime Database
storage = firebase.storage() # Storage
