angular.
  module('sandboxApp').
  config(['$locationProvider','$routeProvider',
    function config($locationProvider,$routeProvider) {
      $locationProvider.hashPrefix('!')
      $routeProvider.
        when('/', {
          templateUrl: './index.template.html',
          css: ['/app/sandbox/1_dependencies/css/index.css']
        }).
        when('/ejercicios',{
          template: '<ejercicios-lista></ejercicios-lista>',
          css: ['/app/sandbox/1_dependencies/css/bootstrap.css','/app/sandbox/ejercicios-lista/css/ejercicios-lista.css','/app/sandbox/1_dependencies/css/font-awesome.min.css']
        }).
        when('/ejercicios/:ejercicioId', {
          template: '<ejercicio-detalle></ejercicio-detalle>',
          css: ['/app/sandbox/1_dependencies/css/bootstrap.css','/app/sandbox/ejercicio-detalle/css/ejercicio.css',"/app/sandbox/1_dependencies/css/font-awesome.min.css"]
        }).
        when('/profesores', {
          template: "<profesor-elegir></profesor-elegir>",
          css: ['/app/sandbox/1_dependencies/css/font-awesome.min.css','/app/sandbox/profesor-elegir/css/profesor-elegir.css','/app/sandbox/1_dependencies/css/bootstrap.css']
        }).
        when('/profesor/:profesorId', {
          template: "<profesor-ejercicios></profesor-ejercicios>",
          css: ['/app/sandbox/profesor-ejercicios/css/sandbox.css','/app/sandbox/1_dependencies/css/font-awesome.min.css']
        }).
        when('/profesor/:profesorId/#tab', {
          template: 'profe tab'
        }).
        when('/profesor/ejercicos/:profesorId', {
          template: '<mis-ejercicios></mis-ejercicios>',
          css: ['/app/sandbox/mis-ejercicios/css/sandbox.css','/app/sandbox/1_dependencies/css/font-awesome.min.css']
        }).
				when('/profesor/ejercicios/:profesorId/nuevo', {
					template: '<nuevo-ejercicio></nuevo-ejercicio>',
          css: ['/app/sandbox/nuevo-ejercicio/css/nuevo-ejercicio.css','/app/sandbox/1_dependencies/css/font-awesome.min.css']
				}).
        otherwise('/')
    }
  ]).
factory('ProfesoresService', function($http) {
  var ejercicios = [
  	{
  		"id": "1",
      "autor": "aavendan@espol.edu.ec",
  		"titulo": "Variables y operadores",
  		"descripcion": "Conocer lo basico de asignacion de variables",
  		"etiquetas": [
  			"variables",
  			"asignacion",
  			"operadores"
  		],
  		"porcentaje_resueltos": "50",
  		"nivel_dificultad": 1
  	},{
  		"id": "2",
      "autor": "rabonilla@espol.edu.ec",
  		"titulo": "Numpy",
  		"descripcion": "Ejercicios de numpy",
  		"etiquetas": [
  			"numpy",
  			"listas"
  		],
  		"porcentaje_resueltos": "30",
  		"nivel_dificultad": 2
  	},{
  		"id": "3",
      "autor": "ancalder@espol.edu.ec",
  		"titulo": "Listas",
  		"descripcion": "Listas y su uso",
  		"etiquetas": [
  			"listas",
  			"basico"
  		],
  		"porcentaje_resueltos": "20",
  		"nivel_dificultad": 3
  	},{
  		"id": "4",
      "autor": "rabonilla@espol.edu.ec",
  		"titulo": "Loops",
  		"descripcion": "Conocer diferentes control",
  		"etiquetas": [
  			"loops",
  			"for",
        "while"
  		],
  		"porcentaje_resueltos": "10",
  		"nivel_dificultad": 2
  	},{
  		"id": "5",
      "autor": "ancalder@espol.edu.ec",
  		"titulo": "Condicionales",
  		"descripcion": "Diferentes condicionales",
  		"etiquetas": [
  			"condicionales",
  			"if"
  		],
  		"porcentaje_resueltos": "0",
  		"nivel_dificultad": 5
  	}
  ]

  var info= [
    {
      "nombre": "AVENDAÑO SUDARIO ALLAN ROBERTO",
      "aula": [
        "A-210",
        "24C-205 FIMCP",
        "COMP A FIMCP"
      ],
      "paralelo": [
        "37",
        "34"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES",
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "7:30:00-9:30:00",
        "15:30:00-17:30:00"
      ],
      "correo": [
        "aavendan@fiec.espol.edu.ec",
        "aavendan@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/javiles.jpg"
    },
    {
      "nombre": "BONILLA RAFAEL IGNACIO",
      "aula": [
        "15A-05",
        "A-208",
        "LPU1",
        "LPU2"
      ],
      "paralelo": [
        "8",
        "7"
      ],
      "dia": [
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "14:30:00-16:30:00",
        "11:30:00-13:30:00"
      ],
      "correo": [
        "rabonilla@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/rafael%20bonilla.jpg"
    },
    {
      "nombre": "CALDERON ARGUELLO MARCO ANTONIO",
      "aula": [
        "IC-27",
        "IL02 - LABORATORIO BETA"
      ],
      "paralelo": [
        "4"
      ],
      "dia": [
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "14:30:00-16:30:00"
      ],
      "correo": [
        "ancalder@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/mcalderon.jpg"
    },
    {
      "nombre": "CARLO UNDA MARIA LORENA",
      "aula": [
        "LABORATORIO DE INGENIERÍA DE SOFTWARE",
        "15A-01"
      ],
      "paralelo": [
        "27"
      ],
      "dia": [
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "13:30:00-15:30:00"
      ],
      "correo": [],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/lcarlo_0.jpg"
    },
    {
      "nombre": "CARRASCO IDROVO VERONICA JANNETH",
      "aula": [
        "15A-02",
        "LAB. CENTAURO",
        "LABORATORIO DE INGENIERÍA DE SOFTWARE",
        "COM4"
      ],
      "paralelo": [
        "30",
        "31"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES",
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "7:30:00-9:30:00",
        "15:30:00-17:30:00"
      ],
      "correo": [
        "vcarrasc@fiec.espol.edu.ec",
        "vcarrasc@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/no-avatar_3.jpg"
    },
    {
      "nombre": "CARRERA RIVERA ANGELA ISABEL",
      "aula": [
        "COMP A FIMCP",
        "15A-04",
        "A-114",
        "LABORATORIO DE COMPUTACION 2"
      ],
      "paralelo": [
        "32",
        "36"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "9:30:00-11:30:00",
        "13:30:00-15:30:00"
      ],
      "correo": [],
      "img": ""
    },
    {
      "nombre": "CHEUNG RUIZ IRENE MEIYING",
      "aula": [
        "LAB. CENTAURO",
        "B-201 (AULA-EDCOM)",
        "15A-01",
        "C-305 (LAB-PC-EDCOM)"
      ],
      "paralelo": [
        "24",
        "28"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES",
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "7:30:00-9:30:00"
      ],
      "correo": [
        "icheung@espol.edu.ec",
        "mcheung@fiec.espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/no-avatar_5.jpg"
    },
    {
      "nombre": "CRUZ RAMIREZ EDUARDO SEGUNDO",
      "aula": [
        "LAB. CENTAURO",
        "COM3"
      ],
      "paralelo": [
        "10"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "13:30:00-15:30:00"
      ],
      "correo": [
        "escruz@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/eduardocruz2.jpg"
    },
    {
      "nombre": "DEL ROSARIO CAMPOSANO EDISON ISAIAS",
      "aula": [
        "31B102 ICM",
        "LAB. OMEGA ICM"
      ],
      "paralelo": [
        "22"
      ],
      "dia": [
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "7:30:00-9:30:00"
      ],
      "correo": [
        "edelros@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/erosario.jpg"
    },
    {
      "nombre": "FALCONES MONTESDEOCA CRUZ MARIA",
      "aula": [
        "LABORATORIO DE INGENIERÍA DE SOFTWARE",
        "COMP A FIMCP",
        "A-103",
        "COM4"
      ],
      "paralelo": [
        "6",
        "2"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES",
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "11:30:00-13:30:00",
        "13:30:00-15:30:00"
      ],
      "correo": [
        "cfalcone@espol.edu.ec",
        "cfalcone@fiec.espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/cruz%20falcones.jpg"
    },
    {
      "nombre": "MAGALLANES BORBOR JORGE ANTONIO",
      "aula": [
        "LABORATORIO CISCO",
        "A-105"
      ],
      "paralelo": [
        "11"
      ],
      "dia": [
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "14:30:00-16:30:00"
      ],
      "correo": [
        "jmagalla@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/jorge%20magallanes.jpg"
    },
    {
      "nombre": "MALO PINZA FRANK CARLOS",
      "aula": [
        "A-205",
        "31B303 ICM",
        "LAB. SIGMA ICM",
        "COM4"
      ],
      "paralelo": [
        "18",
        "20"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES",
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "14:30:00-16:30:00",
        "9:30:00-11:30:00"
      ],
      "correo": [
        "fmalo@fiec.espol.edu.ec",
        "fmalo@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/no-avatar_7.jpg"
    },
    {
      "nombre": "MERA SUÁREZ ROCÍO ELIZABETH",
      "aula": [
        "A-210",
        "24C-106 FIMCP",
        "COMP A FIMCP"
      ],
      "paralelo": [
        "38",
        "33"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES",
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "9:30:00-11:30:00",
        "13:30:00-15:30:00"
      ],
      "correo": [
        "remera@espol.edu.ec",
        "emera@fiec.espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/no-avatar_8.jpg"
    },
    {
      "nombre": "MURILLO BAJAÑA EDUARDO WENCESLAO",
      "aula": [
        "COM2",
        "A-114",
        "COMP A FIMCP"
      ],
      "paralelo": [
        "35",
        "17"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "7:30:00-9:30:00",
        "11:30:00-13:30:00"
      ],
      "correo": [
        "wmurillo@fiec.espol.edu.ec",
        "emurillo@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/no-avatar_9.jpg"
    },
    {
      "nombre": "NOBOA MACIAS DALTON GEOVANNY",
      "aula": [
        "BA18 ICM",
        "LAB. OMEGA ICM"
      ],
      "paralelo": [
        "26"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "16:30:00-18:30:00"
      ],
      "correo": [],
      "img": ""
    },
    {
      "nombre": "PINCAY NIEVES JHONNY VLADIMIR",
      "aula": [
        "LABORATORIO DE INGENIERÍA DE SOFTWARE",
        "A-113"
      ],
      "paralelo": [
        "1"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "11:30:00-13:30:00"
      ],
      "correo": [
        "jpincay@fiec.espol.edu.ec",
        "jvpincay@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/johnny%20pincay_0.jpg"
    },
    {
      "nombre": "REALPE ROBALINO MIGUEL ANDRES",
      "aula": [
        "A-114",
        "LABORATORIO CISCO"
      ],
      "paralelo": [
        "14"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "15:30:00-17:30:00"
      ],
      "correo": [],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/mrealpe_0.jpg"
    },
    {
      "nombre": "RODRIGUEZ OJEDA LUIS ENRIQUE",
      "aula": [
        "BA11 ICM",
        "LAB. OMEGA ICM"
      ],
      "paralelo": [
        "23",
        "5"
      ],
      "dia": [
        "MIÉRCOLES",
        "VIERNES",
        "MARTES",
        "JUEVES"
      ],
      "hora": [
        "7:30:00-9:30:00",
        "9:30:00-11:30:00"
      ],
      "correo": [],
      "img": ""
    },
    {
      "nombre": "SALTOS BERNAL GINGER VIVIANA",
      "aula": [
        "15A-02",
        "A-210",
        "LABORATORIO CISCO"
      ],
      "paralelo": [
        "21",
        "29"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "13:30:00-15:30:00",
        "8:30:00-10:30:00"
      ],
      "correo": [
        "vsaltos@fiec.espol.edu.ec",
        "gvsaltos@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/no-avatar_10.jpg"
    },
    {
      "nombre": "SARAGURO BRAVO RODRIGO ALEXANDER",
      "aula": [
        "COM3",
        "COMP B FIMCP"
      ],
      "paralelo": [
        "13"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "9:30:00-11:30:00"
      ],
      "correo": [],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/saraguro.jpg"
    },
    {
      "nombre": "TAPIA ROSERO ANA TERESA",
      "aula": [
        "COM4",
        "LABORATORIO DE COMPUTACION 2"
      ],
      "paralelo": [
        "12"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "9:30:00-11:30:00"
      ],
      "correo": [
        "atapia@fiec.espol.edu.ec",
        "atapia@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/ana%20tapia.jpg"
    },
    {
      "nombre": "UGARTE FAJARDO JORGE GUSTAVO",
      "aula": [
        "LAB. SIGMA ICM",
        "BA22 ICM"
      ],
      "paralelo": [
        "15"
      ],
      "dia": [
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "9:30:00-11:30:00"
      ],
      "correo": [],
      "img": ""
    },
    {
      "nombre": "VACA RUIZ CARMEN KARINA",
      "aula": [
        "COM3",
        "LABORATORIO DE COMPUTACION 2"
      ],
      "paralelo": [
        "3"
      ],
      "dia": [
        "JUEVES",
        "MARTES"
      ],
      "hora": [
        "11:30:00-13:30:00"
      ],
      "correo": [
        "cvaca@espol.edu.ec"
      ],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/cvaca_0.jpg"
    },
    {
      "nombre": "VILLA VASQUEZ JOSE FABIAN",
      "aula": [
        "BA22 ICM",
        "LAB. BETA ICM"
      ],
      "paralelo": [
        "25"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "14:30:00-16:30:00"
      ],
      "correo": [],
      "img": ""
    },
    {
      "nombre": "YANEZ PAZMIÑO WENDY PAOLA",
      "aula": [
        "LAB. CENTAURO",
        "A-201",
        "A-202"
      ],
      "paralelo": [
        "9",
        "19"
      ],
      "dia": [
        "LUNES",
        "MIÉRCOLES"
      ],
      "hora": [
        "9:30:00-11:30:00",
        "11:30:00-13:30:00"
      ],
      "correo": [],
      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/pyanez_0.jpg"
    }
  ]
    return {
      info: info,
      ejercicios: ejercicios
    }
})
