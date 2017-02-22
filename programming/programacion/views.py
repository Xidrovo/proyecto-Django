from django.shortcuts import render
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.utils import timezone
from programacion.models import Noticia, Profesor
from django.shortcuts import get_object_or_404, render_to_response, redirect
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

def noticias(request):
	noticias = Noticia.objects.order_by('-fecha_publicacion')
	return render_to_response('noticias.html',{'noticias':noticias})

@csrf_exempt
def crearNoticia(request):
	profTemp = Profesor(correo = "asd", password = "1234", nombre="asdds", apellido = "assad", cedula="0000000001")

	if request.method == 'POST':
		titulo = request.POST.get('titulo', '')
		descripcion = request.POST.get('descripcion')
		tags = request.POST.get('tag', '')
		noticia = Noticia(titulo = titulo, descrpcion = descripcion, fecha_publicacion = timezone.now(), 
						tags = tags, img_url = "#" , profesor_creador = profTemp, estudiante_creador = None)
		noticia.save()

		return HttpResponseRedirect('noticias')
	else:
		return redirect('/')

#titulo, descripcion, fecha, tag, img_url, estudiante, prof

'''
	correo = models.CharField(max_length = 100)
	password = models.TextField()
	nombre = models.CharField(max_length = 50)
	apellido = models.CharField(max_length = 50)
	cedula = models.CharField(max_length = 10, primary_key = True)
'''