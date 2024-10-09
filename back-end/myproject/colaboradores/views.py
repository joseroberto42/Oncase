from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Colaborador
from .serializers import ColaboradorSerializer

# ViewSet para a model Colaborador
class ColaboradorViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing colaborador instances.
    """
    queryset = Colaborador.objects.all()  # Consulta para obter todos os colaboradores
    serializer_class = ColaboradorSerializer  # Serializer a ser usado para a model Colaborador

    def create(self, request, *args, **kwargs):
        """
        Cria um novo colaborador.
        """
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Salva o novo colaborador
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Retorna os dados do colaborador criado
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Retorna erros se houver

    def update(self, request, *args, **kwargs):
        """
        Atualiza um colaborador existente.
        """
        partial = kwargs.pop('partial', False)  # Se a atualização é parcial
        instance = self.get_object()  # Obtém a instância do colaborador
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        if serializer.is_valid():
            serializer.save()  # Salva as alterações
            return Response(serializer.data)  # Retorna os dados atualizados
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Retorna erros se houver

    def destroy(self, request, *args, **kwargs):
        """
        Deleta um colaborador existente.
        """
        instance = self.get_object()  # Obtém a instância do colaborador
        instance.delete()  # Deleta o colaborador
        return Response(status=status.HTTP_204_NO_CONTENT)  # Retorna um status 204 No Content

