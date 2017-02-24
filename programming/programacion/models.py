from django.db import models
from django.utils import timezone
# Create your models here.

#use CharField when you need to limit the maximum length, TextField otherwise
class Profesor(models.Model):
	correo = models.CharField(max_length = 100)
	password = models.TextField()
	nombre = models.CharField(max_length = 50)
	apellido = models.CharField(max_length = 50)
	cedula = models.CharField(max_length = 10, primary_key = True)

class Estudiante(models.Model):
	ROL_CHOICE = (
        ('R', 'Regular'),
        ('A', 'Ayudante'),
    )
	correo = models.CharField(max_length = 100)
	password = models.TextField()
	nombre = models.CharField(max_length = 50)
	apellido = models.CharField(max_length = 50)
	rol = models.CharField(max_length = 1, choices = ROL_CHOICE)
	score = models.IntegerField()
	matricula = models.CharField(max_length = 9, primary_key = True)

class Paralelo(models.Model):
	profesor_id = models.ForeignKey(Profesor, on_delete = models.CASCADE)
	estudiante_id = models.ForeignKey(Estudiante, on_delete = models.CASCADE)
	paralelo = models.IntegerField()

class Noticia(models.Model):
	#titulo, descripcion, fecha, creador, tags, imagen_url
	titulo = models.CharField(max_length = 100)
	descrpcion = models.TextField()
	fecha_publicacion = models.DateTimeField(auto_now_add = True)
	tags = models.CharField(max_length = 100)
	img_url = models.CharField(max_length = 150)
	profesor_creador = models.ForeignKey(Profesor, null = True)
	estudiante_creador = models.ForeignKey(Estudiante, null = True)

class Curso(models.Model):
	descrpcion = models.TextField()
	requisitos = models.CharField(max_length = 100)
	politicas = models.TextField()
	
class Syllabus(models.Model):
	titulo = models.CharField(max_length = 200)
	descrpcion = models.TextField()

class Clase(models.Model):
	titulo = models.CharField(max_length = 200)
	video = models.CharField(max_length = 200)
	descrpcion = models.TextField()
#manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)