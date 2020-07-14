import re
from django.http import HttpResponseRedirect, FileResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django import forms
from datetime import datetime
from .forms import CustomUserCreationForm, CustomUserChangeForm, ProfileUpdateForm, RegisterForm
from .models import Profile, User
#from random import randint
# Create your views here.

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        p_form = ProfileUpdateForm(request.POST)
        if form.is_valid() and p_form.is_valid():
                user = form.save( commit=False )
                #regex = r'[A-Z][0-9]{2,2}'
                user.save()

                profile=Profile(user=user)
                profile.save()
                if user is not None:
                    login(request, user)
                    # Redirect to a success page.
                    return redirect('index')
                else:
                    return redirect('login')
                    # Return an 'invalid login' error message.
        else:
            context = {'form': form, 'p_form':p_form}
            return render(request, 'users/register.html', context)
    else:
        return render(request, 'users/register.html')
        
@login_required
def edit_profile(request):
    if request.method == 'POST':
        u_form = CustomUserChangeForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(request.POST,
                                   request.FILES,
                                   instance=request.user.profile)
        
        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            profile = p_form.save()
            # if request.POST.get('birthday', False):
            #     date_object = datetime.strptime(request.POST['birthday'], "%d/%m/%Y").date()
            #     profile.birthday = date_object
            #     profile.save()

            return redirect('profile')
        else:
            return redirect('profile')
    else:
        return redirect('profile')

def default(request, filename):

    response = FileResponse( open(f'media/{filename}', 'rb') )
    return response

def default2(request, folder ,filename):

    response = FileResponse( open(f'media/{folder}/{filename}', 'rb') )
    return response
