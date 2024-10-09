from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ColaboradorViewSet

# Criação de uma instância do DefaultRouter
router = DefaultRouter()

# Registro do ColaboradorViewSet no router
router.register(r'colaboradores', ColaboradorViewSet)

# Inclusão das URLs do router nas urlpatterns
urlpatterns = [
    path('', include(router.urls)),  # Inclui todas as URLs do router
]

