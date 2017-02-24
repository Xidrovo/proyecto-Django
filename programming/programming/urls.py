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
	url(r'^login/$', auth_views.login, name='login'),
    url(r'^logout/$', auth_views.logout, name='logout'),
    url(r'^noticias/$', noticias, name = "noticias"),
    url(r'^nueva_noticia$',crearNoticia, name = "crearNoticia"),
    url(r'^cursos/$', cursos, name = "cursos"),
    url(r'^perfil/(?P<persona_id>\d+)/$', perfil, name="persona_id"),
    url(r'^perfil/profeshor/(?P<persona_id>\d+)/$', perfilProfesor, name="persona_id"),
    url(r'^semanal/$', semana, name = "semana"),
]

#url(r'^preguntas/(?P<pregunta_id>\d+)/$', pregunta_detalle, name="pregunta_detalle"),
