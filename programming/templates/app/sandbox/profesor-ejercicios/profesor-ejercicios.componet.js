angular.
  module('profesorEjercicios').
  component('profesorEjercicios', {
    controller: ['ProfesoresService','$routeParams','$http',
      function ProfesorEjerciciosController(ProfesoresService,$routeParams,$http) {
        var self = this
        self.$back = function() {
          window.history.back();
        };

        $http.get('../../public/json_files/info_joel.json').then(function(response) {
          response.data.profesores.forEach(function(profesor) {
            profesor.correo.forEach(function(correo) {
              if (correo == $routeParams.profesorId) {
                self.profesor_data = profesor
              }
            })
          })
        })
    }],
    templateUrl: "./profesor-ejercicios/profesor-ejercicios.template.html"
  })
