angular.
  module('ejercicioDetalle').
  component('ejercicioDetalle', {
    templateUrl: 'ejercicio-detalle/ejercicio-detalle.template.html',
    controller: ['$http','$routeParams',
      function EjercicioDetalleController($http,$routeParams) {
        var self = this
        self.$back = function() {
          window.history.back();
        };
        self.range = function(min, max, step) {
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
        };
        $http.get('../../public/json_files/ejercicios/'+$routeParams.ejercicioId+'.json').then(function(response) {
          self.ejercicio = response.data
        })
        $http.get('../../public/json_files/ejercicios/ejercicios.json').then(function(response) {
            response.data.forEach(function(ejercicio) {
              if(ejercicio.id == $routeParams.ejercicioId) {
                self.ejercicio_data = ejercicio
              }
            })
        })
        $http.get('../../public/json_files/info_joel.json').then(function(response) {
            response.data.profesores.forEach(function(profesor) {
              profesor.correo.forEach(function(correo) {
                if(correo == self.ejercicio_data.autor) {
                  self.autor = profesor
                }
              })
            })
        })

      }
    ]
  })
