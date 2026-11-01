from django.urls import path
from .views import analyze_resume, ResumeUploadView

urlpatterns = [
    path("analyze/", analyze_resume),
    path('upload/', ResumeUploadView.as_view(), name='resume-upload'),
]
