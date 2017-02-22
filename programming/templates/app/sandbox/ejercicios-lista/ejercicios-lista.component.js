angular.
  module('ejerciciosLista').
  component('ejerciciosLista', {
    templateUrl: 'ejercicios-lista/ejercicios-lista.template.html',
    controller: ["$http",function EjerciciosListaController($http) {
      var self = this
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
      $http.get('../../public/json_files/ejercicios/ejercicios.json').then(function(response) {
          self.ejercicios = response.data
      });
    }]
  })
