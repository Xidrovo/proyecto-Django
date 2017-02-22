angular.module('App', []).
  controller('ActividadesClasesController', function($scope, $http) {
  $http.get('./json/actividades_clase.json')
       .then(function(res){
          $scope.clases = res.data.actividades
        })
  }).
  controller('ClaseTemaController', ['$scope', '$compile','$http', function($scope, $compile,$http) {
    $scope.estado = false;
    /*
    $scope.showdiv = function(event) {
      id_clase = $(event.target).attr("id-clase")
      console.log(id_clase);
    }*/
    $scope.showdiv =  function(event){
      id_clase = $(event.target).attr("id-clase")
      $scope.estado = true;
       $http.get('./json/actividades_clase.json')
            .then(function(res){
                res.data.actividades.forEach(function(semana){
                  semana.clases.forEach(function(clase) {
                    if (clase.id == id_clase){
                        $scope.clase_escogida = clase
                        console.log(clase.id + clase.descripcion)
                        $scope.templateURL = './templates/nav_clase.html';
                    }
                  })
                })
             })
       };
  }]).
  controller('ContenidoClaseController', function ContenidoClaseController() {
    this.hero = {
      name: 'Spawn'
    }
  }).
  controller('ClaseMenuController', function() {

  }).
  controller('ctrl', function($scope,$http) {
    var cl
    $http.get('./json/actividades_clase.json')
         .then(function(res){
            cl = res.data.actividades
            console.log(cl[0])
            $scope.rightItem = {color: cl[0].semana};
            $scope.leftItem = {color: cl[1].semana};
          })
  }).
  config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});
