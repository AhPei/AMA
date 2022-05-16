from django import forms

class UserForm(forms.Form):
  email = forms.EmailField(max_length=50,required=True)
  password = forms.CharField(widget=forms.PasswordInput(),required=True)
  uname = forms.CharField(max_length=50,required=True)
  fname = forms.CharField(max_length=50,required=True)
  lname = forms.CharField(max_length=50,required=True)
  phone = forms.CharField(max_length=50,required=True)