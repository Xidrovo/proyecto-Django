"""programming URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from programacion.views import *
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static

admin.autodiscover()
urlpatterns = [
	url(r'^$', index, name = "index"),
    url(r'^rankings/$', Rankings, name = "Rankings"),
    url(r'^equipo/$', Equipo, name = "Equipo"),
    url(r'^ayudantias/$', Ayudantias, name = "Ayudantias"),
    #Sección de noticias
    url(r'^noticias/$', noticias, name = "noticias"),
    url(r'^nueva_noticia$',crearNoticia, name = "crearNoticia"),
    url(r'^deleteNews$', deleteNews, name = "deleteNews"),
    url(r'^editNews$', editNews, name = "editNews"),
    #Para visualizar todo lo que tenga que ver con los cursos.
    url(r'^cursos/$', cursos, name = "cursos"),
    url(r'^syllDesc$', syllDesc, name = "syllDesc"),
    url(r'^syllReq$', syllReq, name = "syllReq"),
    url(r'^syllPol$', syllPol, name = "syllPol"),
    url(r'^syll$', syll, name = "syll"),
    #useless one
    url(r'^perfil/(?P<persona_id>\d+)/$', perfil, name="persona_id"),
    url(r'^perfil/profeshor/(?P<persona_id>\d+)/$', perfilProfesor, name="persona_id"),
    #Para los templates de semanal
    url(r'^semanal/$', semana, name = "semana"),
    url(r'^eliminarClase$',eliminarClase, name = "eliminarClase"),
    url(r'^edit_clase$',edit_clase, name = "edit_clase"),
    url(r'^nueva_clase$',crearClase, name = "crearClase"),
]

#url(r'^preguntas/(?P<pregunta_id>\d+)/$', pregunta_detalle, name="pregunta_detalle"),
