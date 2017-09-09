var app = angular.module('app');


app.controller('ListaController', function($scope, $location, $http)
{
    var modalExcluir = $('#confirmaExclusao');
    
    $scope.lista = [];

    // Requisição AJAX para obter a lista de reservas do backend
    $http.get('http://localhost:5000/reservas')
        .then(function(response) {
            $scope.lista = response.data;
        });

    $scope.cadastrar = function cadastrar() {
        $location.path("/cadastro");
    };

    $scope.editar = function editar(id) {
        
        $location.path("/cadastro/" + id);
    };

    $scope.abreModalExclusao = function abreModalExclusao(reserva, indice) {
        $scope.reserva = reserva;
        $scope.indice = indice;
        modalExcluir.modal('show');
    };

    $scope.excluir = function excluir(indice) {
        $scope.lista.splice(indice, 1);
        modalExcluir.modal('hide');
    };

    $scope.apagarVariasReserva = function apagarVariasReserva(lista) {
        $scope.lista = lista.filter(function (reserva) {
            if(!reserva.selecionado) return reserva;
        });
    };

    $scope.isReservaSelecionada = function isReservaSelecionada(lista) {
        return lista.some(function (reserva) {
            return reserva.selecionado;
        });
    };

});