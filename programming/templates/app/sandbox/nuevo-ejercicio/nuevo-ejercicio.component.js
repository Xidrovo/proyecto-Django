angular.
  module('nuevoEjercicio').
  component('nuevoEjercicio', {
    templateUrl: 'nuevo-ejercicio/nuevo-ejercicio.template.html',
    controller: ["$location","$http",'$routeParams',
      function EjerciciosListaController($location,$http,$routeParams) {
        this.autor = $routeParams.profesorId
        this.tags = [

        ];
        this.choices = [];

        this.addNewChoice = function() {
          var newItemNo = this.choices.length+1;
          this.choices.push({'id':'choice'+newItemNo});
        };

        this.removeChoice = function() {
          var lastItem = this.choices.length-1;
          this.choices.splice(lastItem);
        };
        this.salida = [];

        this.addNewSalida = function() {
          var newItemNo = this.salida.length+1;
          this.salida.push({'id':'choice'+newItemNo});
        };

        this.removeSalida = function() {
          var lastItem = this.salida.length-1;
          this.salida.splice(lastItem);
        };
        this.entrada = [];

        this.addNewEntrada = function() {
          var newItemNo = this.entrada.length+1;
          this.entrada.push({'id':'choice'+newItemNo});
        };

        this.removeEntrada = function() {
          var lastItem = this.entrada.length-1;
          this.entrada.splice(lastItem);
        };
        this.salida_sample = [];

        this.addNewSalida_sample = function() {
          var newItemNo = this.salida_sample.length+1;
          this.salida_sample.push({'id':'choice'+newItemNo});
        };

        this.removeSalida_sample = function() {
          var lastItem = this.salida_sample.length-1;
          this.salida_sample.splice(lastItem);
        };

        this.go = function ( path ) {
          $location.path( path );
        };

        this.alerts = [
           { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
           { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
       ];

         this.addAlert = function() {
           this.alerts.push({msg: 'Another alert!'});
         };

         this.closeAlert = function(index) {
           this.alerts.splice(index, 1);
         };
    }]
  })
