from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Zapato
from .serializers import ZapatoSerializer

@api_view(['GET'])
def lista_zapatos(request):
    # Trae todos los datos de la base de datos
    zapatos = Zapato.objects.all()

    # Convierte los datos a JSON
    serializer = ZapatoSerializer(zapatos, many=True)

    # Retorna los datos en formato JSON para React
    return Response(serializer.data)