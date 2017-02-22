#!/usr/bin/python
# -*- coding:utf-8 -*-
cont = -1
primero = True
lineas = []
linealTemp = []
info = []
matricula = ""
nombre = ""
correo = []
profesor = []
paralelo = []
clase = ""

f = open("ayu.csv","r", encoding='latin1')
for linea in f:
	linea = linea.rstrip("\n")
	lineas.append(linea)
	
f.close()
text_file = open("Output.txt", "w")

for x in lineas:
	x = x.split(',')
	linealTemp.append(x)
text_file.write("{")
for x in range(len(linealTemp)):
	try:
		int(linealTemp[x][0])
		if(cont != -1):
			text_file.write(" \"matricula\": \"" + matricula + "\",\n")
			text_file.write(" \"nombre\": \"" + nombre + "\",\n")
			
			text_file.write(" \"correo\": [")
			#Correos
			for y in correo:
				if(primero == False):
					text_file.write(",\n")
				text_file.write(" \"" + y + "\"")
				if (primero):
					primero = False
			text_file.write("],\n")
			#Profesores
			primero = True
			text_file.write("\"profesor\": [")
			for y in profesor:
				if(primero == False):
					text_file.write(",\n")
				text_file.write(" \"" + y + "\"")
				if (primero):
					primero = False
			text_file.write("],\n")
			#Paralelos
			primero = True
			text_file.write("\"paralelo\": [")
			for y in paralelo:
				if(primero == False):
					text_file.write(",\n")
				text_file.write(" \"" + y + "\"")
				if (primero):
					primero = False
			text_file.write("],\n")
			primero = True
			text_file.write("\"tipo\" : \"grader\"\n},{\n")
			
		correo = []
		profesor = []
		paralelo = []
		cont = cont + 1
		matricula = linealTemp[x][0]
		nombre = linealTemp[x][1]
		correo.append(linealTemp[x][2])
		profesor.append(linealTemp[x][3])
		paralelo.append(linealTemp[x][4])
	except:
		if(linealTemp[x][2] != ''):
			correo.append(linealTemp[x][2])
		if(linealTemp[x][3] != ''):
			profesor.append(linealTemp[x][3])
		if(linealTemp[x][4] != ''):
			paralelo.append(linealTemp[x][4])
		
#matricula = ""
#nombre = ""
#correo = []
#profesor = []
#paralelo = []
#clase = ""		
#text_file.write("Purchase Amount:")
text_file.close()