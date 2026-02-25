from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Zapato
from .serializers import ZapatoSerializer

@api_view(['GET'])
def inicio(request):
    # 1. Vamos a la base de datos y traemos todos los tenis registrados
    zapatos = Zapato.objects.all()
    
    # 2. Los pasamos por nuestro traductor
    serializer = ZapatoSerializer(zapatos, many=True)
    
    # 3. Enviamos la respuesta
    return Response(serializer.data)