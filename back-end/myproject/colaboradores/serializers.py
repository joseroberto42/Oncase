from rest_framework import serializers
from .models import Colaborador

class ColaboradorSerializer(serializers.ModelSerializer):
    primeiro_nome = serializers.CharField(max_length=100)
    ultimo_nome = serializers.CharField(max_length=100)
    porcentagem_contribuicao = serializers.FloatField()

    class Meta:
        model = Colaborador
        fields = '__all__'

    def validate_primeiro_nome(self, value):
        if any(char.isdigit() for char in value):
            raise serializers.ValidationError("O primeiro nome não pode conter números.")
        return value

    def validate_ultimo_nome(self, value):
        if any(char.isdigit() for char in value):
            raise serializers.ValidationError("O último nome não pode conter números.")
        return value

    def validate_porcentagem_contribuicao(self, value):
        if not isinstance(value, (int, float)) or value < 0:
            raise serializers.ValidationError("A porcentagem de contribuição deve ser um número positivo.")
        return value

    def validate(self, attrs):
        porcentagem = attrs.get('porcentagem_contribuicao', None)
        if isinstance(porcentagem, str) and not porcentagem.isdigit():
            raise serializers.ValidationError("A porcentagem de contribuição não pode conter letras ou caracteres especiais.")
        return attrs
