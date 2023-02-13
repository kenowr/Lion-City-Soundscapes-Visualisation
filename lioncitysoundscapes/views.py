from django.shortcuts import render
from django.http import HttpResponse

def about_page(request):
    return render(request, 'about.html')

def header(request):
    return render(request, 'header.html')