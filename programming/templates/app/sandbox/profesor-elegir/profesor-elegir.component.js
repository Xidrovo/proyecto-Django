angular.
  module('profesorElegir').
  component('profesorElegir', {
    templateUrl: 'profesor-elegir/profesor-elegir.template.html',
    controller: ['$http',function ProfesorElegirController($http) {
        var self = this
        //this.profesorId = $routeParams.profesorId
        $http.get('../../public/json_files/info_joel.json').then(function(response) {
            self.profesores = response.data.profesores
        });
    }]
  })
