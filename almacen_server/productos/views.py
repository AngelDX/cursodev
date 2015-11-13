from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from productos.models import Categoria
# Serializers define the API representation.


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

# ViewSets define the view behavior.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categoria
        #fields = ('url', 'username', 'email', 'is_staff')

# ViewSets define the view behavior.
from rest_framework import permissions


class CategoriaViewSet(viewsets.ModelViewSet):
    #permission_classes = [permissions.IsAuthenticated]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
