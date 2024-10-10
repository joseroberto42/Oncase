from django.shortcuts import get_object_or_404
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
    queryset = Colaborador.objects.all()
    serializer_class = ColaboradorSerializer

    def create(self, request, *args, **kwargs):
        """
        Cria um novo colaborador.
        """
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Salva o novo colaborador
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Erros de requisição

    def update(self, request, *args, **kwargs):
        """
        Atualiza um colaborador existente.
        """
        partial = kwargs.pop('partial', False)
        instance = get_object_or_404(Colaborador, pk=kwargs['pk'])  # Obtenha o colaborador ou 404
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Erros de requisição

    def destroy(self, request, *args, **kwargs):
        """
        Deleta um colaborador existente.
        """
        instance = get_object_or_404(Colaborador, pk=kwargs['pk'])  # Obtenha o colaborador ou 404
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)  # Retorna 204 No Content


