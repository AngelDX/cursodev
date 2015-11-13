from django.conf.urls import include, url
from rest_framework import routers
from productos.views import UserViewSet, CategoriaViewSet
#from productos.views import CategoriaViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'categorias', CategoriaViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
]
