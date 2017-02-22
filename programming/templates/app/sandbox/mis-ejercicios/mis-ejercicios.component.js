angular.
  module('misEjercicios').
  component('misEjercicios', {
    templateUrl: 'mis-ejercicios/mis-ejercicios.template.html',
    controller: ["$http","$routeParams",'ProfesoresService',function EjerciciosListaController($http,$routeParams,ProfesoresService) {
      var self = this
      this.info = ProfesoresService.info
      this.ejercicios = ProfesoresService.ejercicios
      self.autor = $routeParams.profesorId
      self.$back = function() {
        window.history.back();
      };
      this.range = function(min, max, step) {
          step = step || 1;
          var input = [];
          for (var i = min; i <= max; i += step) {
              input.push(i);
          }
          return input;
      };
      this.random = function() {
        return 0.5 - Math.random();
      }
      /*
      $http.get('../../public/json_files/ejercicios/ejercicios.json').then(function(response) {
          self.ejercicios = response.data
      })*/
      this.deleteItem = function (index) {
        self.ejercicios.splice(index, 1);
      }

      this.editar = function() {

      }
    }]
  })
