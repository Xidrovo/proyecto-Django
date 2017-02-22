function ContenidoClaseControllerC() {

}

function NavClaseController() {

}

function ContenidoClaseController() {

}

function ClaseTemaController() {

}

angular.module('App').component('contenidoClase', {
    templateUrl: '../semanal/templates/nav_clase.html',
    controller: ClaseTemaController,
    bindings: {
      hero: '='
    }
  }).
  component('menuClase', {
    templateUrl: '../semanal/templates/nav_clase.html',
    controller: NavClaseController
  })
