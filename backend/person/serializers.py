from rest_framework import serializers


class PersonSerializer(serializers.Serializer):

    name = serializers.CharField()
    cpf = serializers.CharField()
    address = serializers.CharField()
