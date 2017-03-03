from django.shortcuts import render
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.utils import timezone
from programacion.models import *
from django.shortcuts import get_object_or_404, render_to_response, redirect
from django.views.decorators.csrf import csrf_exempt
from django.db import connection
# Create your views here.
def index(request):
	return render_to_response('index.html')

#.::NOTICIAS::.
#--------------------------------------------------------------
def noticias(request):
	noticias = Noticia.objects.order_by('-fecha_publicacion')
	return render_to_response('noticias.html',{'noticias':noticias})

@csrf_exempt
def deleteNews(request):

	if request.method == 'POST':
		identificador	=	request.POST.get('id')
		Noticia.objects.filter(id=identificador).delete()
		return HttpResponseRedirect('noticias')
	else:
		return redirect('/')


@csrf_exempt
def crearNoticia(request):
	profTemp = Profesor(correo		=	"asd",
						password	=	"1234",
						nombre		=	"asdds", 
						apellido	=	"assad", 
						cedula		=	"0000000001"	)

	if request.method == 'POST':
		titulo 		=	request.POST.get('titulo', '')
		descripcion	=	request.POST.get('descripcion')
		tags		=	request.POST.get('tag', '')
		noticia 	=	Noticia(titulo 				=	titulo,
								descrpcion 			=	descripcion,
								fecha_publicacion	=	timezone.now(), 
								tags				=	tags,
								img_url				=	"#" ,
								profesor_creador 	=	profTemp,
								estudiante_creador	=	None)

		noticia.save()

		return HttpResponseRedirect('noticias')
	else:
		return redirect('/')

@csrf_exempt
def editNews(request):

	if request.method == 'POST':
		noticia 				= 	Noticia.objects.get(pk = int(request.POST.get('identificador')))
		noticia.titulo 			= 	request.POST.get('titulo')
		noticia.descrpcion		= 	request.POST.get('descripcion')
		noticia.tags 			=	request.POST.get('tags')

		noticia.save()

		return HttpResponseRedirect('noticias')
	else:
		return redirect('/')
#--------------------------------------------------------------		
#Useless part below here
def perfil (request, persona_id):
	perfil = get_object_or_404(Estudiante, pk = persona_id)
	return render_to_response('perfil.html',
				{'perfil':perfil})

def perfilProfesor (request, persona_id):
	perfil = get_object_or_404(Profesor, pk = persona_id)
	return render_to_response('perfilProf.html',
				{'perfil':perfil})

#EVERYTHING ABOUT COURSES INSIDE HERE
#--------------------------------------------------------------
def cursos (request):
	curso = Curso.objects.get(id=1)
	syllabus = Syllabus.objects.all()

	return render_to_response('cursos.html',
				{'curso':curso, 'syllabus':syllabus})

@csrf_exempt
def syllDesc(request):

	if request.method == 'POST':
		curso 					=	Curso.objects.get(id=1)
		curso.descrpcion		= 	request.POST.get('descripcion')

		curso.save()

		return HttpResponseRedirect('cursos')
	else:
		return redirect('/')

@csrf_exempt
def syllReq(request):

	if request.method == 'POST':
		curso 					=	Curso.objects.get(id=1)
		curso.requisitos		= 	request.POST.get('requisitos')

		curso.save()

		return HttpResponseRedirect('cursos')
	else:
		return redirect('/')

@csrf_exempt
def syllPol(request):

	if request.method == 'POST':
		curso 					=	Curso.objects.get(id=1)
		curso.politicas			= 	request.POST.get('politicas')

		curso.save()

		return HttpResponseRedirect('cursos')
	else:
		return redirect('/')

@csrf_exempt
def syll(request):

	if request.method == 'POST':
		syllabus 			= 	Syllabus.objects.get(pk = request.POST.get('identificador'))
		syllabus.titulo		= 	request.POST.get('titulo')
		syllabus.descrpcion =	request.POST.get('descripcion')

		syllabus.save()

		return HttpResponseRedirect('cursos')
	else:
		return redirect('/')


#--------------------------------------------------------------
#END HERE

def semana (request):
	clases = Clase.objects.all()
	return render_to_response('semanal.html',
				{'clases':clases})

@csrf_exempt
def eliminarClase(request):
	if request.method == 'POST':
		identificador	=	request.POST.get('id')
		Clase.objects.filter(id=identificador).delete()
		return HttpResponseRedirect('semanal')
	else:
		return redirect('/')

@csrf_exempt
def edit_clase(request):

	if request.method == 'POST':
		clase 					= 	Clase.objects.get(pk = request.POST.get('identificador'))
		clase.titulo 			= 	request.POST.get('titulo')
		clase.descrpcion		= 	request.POST.get('descripcion')
		clase.video 			=	request.POST.get('video')

		clase.save()

		return HttpResponseRedirect('semanal')
	else:
		return redirect('/')

@csrf_exempt
def crearClase(request):

	if request.method == 'POST':
		titulo			=	request.POST.get('titulo')
		descripcion 	=	request.POST.get('descripcion')
		video 			=	request.POST.get('video')

		clase = Clase(	titulo = titulo, 
						descrpcion = descripcion,
						video = video	)
		clase.save()
		return HttpResponseRedirect('semanal')
	else:
		return redirect('/')

def Rankings(request):
	return render_to_response('rankings.html')

def Equipo(request):
	return render_to_response('equipo.html')

def Ayudantias(request):
	return render_to_response('ayudantias.html')