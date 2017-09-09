var app = angular.module('app');


app.controller('CadastroController', function($scope, $location, $routeParams, $http)
{
    if($routeParams.id){
        console.log('editar contato');
    }else {
        console.log('cadastrar contato');
    }

    $scope.reserva = {};
    $scope.locais = [];
    $scope.salas = [];

    // Requisição AJAX para obter a lista de reservas do backend
    $http.get('http://localhost:5000/locais')
        .then(function(response) {
            $scope.locais = response.data;
        });

    // Requisição AJAX para obter a lista de reservas do backend
    $http.get('http://localhost:5000/salas')
        .then(function(response) {
            $scope.salas = response.data;
        });



    $scope.adicionarReserva = function adicionarReserva() {
        $http.post('http://localhost:5000/reservas', $scope.reserva)
            .then(function(response) {
                console.log(response);
        });
    };

    $scope.abreModalEditar = function abreModalEditar(reserva, indice) {
        $scope.reserva = reserva;
        $scope.indice = indice;
        $('#editar').modal('show');
    };

    $scope.cancelar = function cancelar() {
        $location.path("/");

    };
});