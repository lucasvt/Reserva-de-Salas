var app = angular.module('app');


app.controller('CadastroController', function($scope, $location, $routeParams)
{
    if($routeParams.id){
        console.log('editar contato');
    }else {
        console.log('cadastrar contato');
    }

    $scope.reserva = {};
    $scope.locais = [
        'Florianopolis/Capoeiras',
        'Londrina/Centro',
        'São José/Kobrasol'
    ];
    console.log($routeParams.id);

    $scope.salas = [
        'Joaquina',
        'Ingleses',
        'Jurerê'
    ];
    
    $scope.adicionarReserva = function adicionarReserva() {
        $scope.lista.push(angular.copy(reserva));
        delete  $scope.reserva;
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