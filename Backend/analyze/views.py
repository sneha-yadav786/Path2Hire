
import json
import os
from rest_framework import generics
from .models import Resume
from .serializers import ResumeSerializer
from PyPDF2 import PdfReader

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .skills import COMMON_SKILLS
from .gemini_service import generate_recommendations

class ResumeUploadView(generics.CreateAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer


@api_view(["POST"])
def analyze_resume(request):

    resume = request.FILES.get("resume")
    role = request.data.get("role", "").strip().lower()

    if not resume:
        return Response(
            {"error": "Resume not uploaded"},
            status=400
        )

    # 1. Extract text from PDF
    resume_text = ""

    try:
        reader = PdfReader(resume)

        for page in reader.pages:
            resume_text += page.extract_text() or ""

    except Exception:
        return Response(
            {"error": "Unable to read PDF resume"},
            status=400
        )

    if not resume_text.strip():
        return Response(
            {"error": "No readable text found in resume"},
            status=400
        )

    # 2. Rule-based skill detection
    text = resume_text.lower()

    found_skills = []

    for skill in COMMON_SKILLS:
        if skill.lower() in text:
            found_skills.append(skill.title())

    # 3. Load job role requirements
    roles_path = os.path.join(
        os.path.dirname(__file__),
        "roles.json"
    )

    with open(roles.json) as f:
        roles = json.load(f)

    role_lookup = {
    key.strip().lower(): value
    for key, value in roles.items()
}

    required = role_lookup.get(role, [])

    matched = []
    missing = []

    for skill in required:

        if skill.lower() in text:
            matched.append(skill)

        else:
            missing.append(skill)

    # 4. Calculate ATS score
    ats = (
        int((len(matched) / len(required)) * 100)
        if required else 0
    )

    # 5. Generate Gemini recommendations
    ai_recommendations = None
    ai_status = "unavailable"

    try:

        ai_recommendations = generate_recommendations(
            resume_text=resume_text,
            selected_role=role,
            found_skills=found_skills,
            missing_skills=missing
        )

        ai_status = "success"

    except Exception as e:

        print("Gemini API Error:", str(e))

    # 6. Return combined response
    return Response({

        "ats_score": ats,
        "resume_match": ats,

        "found_skills": found_skills,
        "missing_skills": missing,

        "recommendation": (
            f"Learn {', '.join(missing)} to improve ATS."
            if missing else
            "Your resume covers all identified role skills."
        ),

        "ai_recommendations": ai_recommendations,
        "ai_status": ai_status

    })
