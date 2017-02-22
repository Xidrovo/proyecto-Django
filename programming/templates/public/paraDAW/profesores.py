#!/usr/bin/python
# -*- coding:utf-8 -*-
cont = -1
primero = True
jsonFirst = True
lineas = []
linealTemp = []
nombre = ""
paralelo = []
aula = []
dia = []
horaEntr = ""
horaSal = ""
hora = []
clase = ""
img = ""
correo = []

f = open("profe.csv","r", encoding='latin1')
for linea in f:
	linea = linea.rstrip("\n")
	lineas.append(linea)

f.close()
text_file = open("Teacher.txt", "w")

for x in lineas:
	x = x.split(',')
	linealTemp.append(x)

for y in linealTemp:
#Si el nombre es igual, entonces es la info del mismo profesor, caso contrario es nuevo
#Profeshor
	if(nombre != y[0] and cont == 0):
		#Esta es una nueva persona, se escribe todo y se borra todo.
		text_file.write("{\n")
		text_file.write("\"nombre\" : \"" + nombre + "\"\n,")
		#Eliminando valores repetidos
		aula = list(set(aula))
		paralelo = list(set(paralelo))
		dia = list(set(dia))
		hora = list(set(hora))
		correo = list(set(correo))
		#End_Region
		#Aula
		text_file.write(" \"aula\": [")
		for x in aula:
			if(jsonFirst == False):
				text_file.write(",\n")
			text_file.write(" \"" + x + "\"")
			if (jsonFirst):
				jsonFirst = False
		text_file.write("],\n")
		jsonFirst = True
		#Paralelo
		text_file.write(" \"paralelo\": [")
		for x in paralelo:
			if(jsonFirst == False):
				text_file.write(",\n")
			text_file.write(" \"" + x + "\"")
			if (jsonFirst):
				jsonFirst = False
		text_file.write("],\n")
		jsonFirst = True
		#Dia
		text_file.write(" \"dia\": [")
		for x in dia:
			if(jsonFirst == False):
				text_file.write(",\n")
			text_file.write(" \"" + x + "\"")
			if (jsonFirst):
				jsonFirst = False
		text_file.write("],\n")
		jsonFirst = True
		#hora
		text_file.write(" \"hora\": [")
		for x in hora:
			if(jsonFirst == False):
				text_file.write(",\n")
			text_file.write(" \"" + x + "\"")
			if (jsonFirst):
				jsonFirst = False
		text_file.write("],\n")
		jsonFirst = True
		#correo
		text_file.write(" \"correo\": [")
		for x in correo:
			if(jsonFirst == False):
				text_file.write(",\n")
			text_file.write(" \"" + x + "\"")
			if (jsonFirst):
				jsonFirst = False
		text_file.write("],\n")
		jsonFirst = True
		text_file.write("\"img\" : \"" + img + "\"\n")
		text_file.write("},")
		
		nombre = y[0]
		img = y[6]	
		
		aula = []
		paralelo = []
		dia = []
		hora = []
		correo = []
		
	if(cont == -1):
		cont = 0
		nombre = y[0]
		img = y[6]
	
	if(nombre == y[0]):
		if(y[1] != ""):
			aula.append(y[1])
		if(y[2] != ""):
			paralelo.append(y[2])
		if(y[3] != ""):
			dia.append(y[3])
		#Inicio Hora
		horaEntr = y[4]
		horaSal = y[5]
		hora.append(horaEntr + "-" + horaSal)
		#Fin de hora
		if(y[7] != ""):
			correo.append(y[7])
		

#text_file.write("{")