from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from . import plantcore

def home(request):
    return render(request, "chatui/index.html")

@csrf_exempt
def ask_bot(request):
    if request.method == "POST":
        data = json.loads(request.body)
        question = data.get("message")
        answer = plantcore.get_response(question)        
        return JsonResponse({"response": answer})
