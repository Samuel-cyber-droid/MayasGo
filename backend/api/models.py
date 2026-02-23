from django.db import models

# Create your models here.
class Zapato(models.Model):
    # Opciones
    CATEGORIAS = [
        ('Running', 'Running'),
        ('Lifestyle', 'Lifestyle'),
        ('Casual', 'Casual'),
    ]

    titulo = models.CharField(max_length = 100)
    categoria = models.CharField(max_length = 20, choices = CATEGORIAS)
    descripcion = models.TextField()

    # Uso de URLFiel para poner enlcaces de internet igual a react
    imagen_url = models.URLField(max_length = 500)

    # Guardar colores serparado por comas
    colores = models.CharField(max_length = 200, help_text = "Separados por coma")

    materiales = models.CharField(max_length = 200)

    def __str__(self):
        return f"{self.titulo} - {self.categoria}"