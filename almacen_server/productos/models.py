from django.db import models

# Create your models here.


class Categoria(models.Model):

    codigo = models.CharField(max_length=60)
    nombre = models.TextField(null=True, blank=True)
    activo = models.BooleanField(default=True)
    fecha = models.DateTimeField(null=True, blank=True)

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.codigo
