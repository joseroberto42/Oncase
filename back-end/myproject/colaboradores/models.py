from django.db import models

# Create your models here.


class Colaborador(models.Model):
    primeiro_nome = models.CharField(max_length=100)
    ultimo_nome = models.CharField(max_length=100)
    porcentagem_contribuicao = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"{self.primeiro_nome} {self.ultimo_nome}"
