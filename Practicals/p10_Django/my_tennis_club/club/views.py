from django.shortcuts import render

def home(request):
    return render(request, 'club/home.html')

def about(request):
    return render(request, 'club/about.html')
