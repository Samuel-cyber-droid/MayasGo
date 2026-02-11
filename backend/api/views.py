from django.shortcuts import render
from django.http import JsonResponse

def inicio(request):
    datos = {
        "titulo": "Bienvenido a mi sitio moderno",
        "mensaje": "¡Django está enviando datos correctamente!"
    }
    return JsonResponse(datos)