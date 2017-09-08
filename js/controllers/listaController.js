var app = angular.module('app');


app.controller('ListaController', function($scope, $location)
{
    var modalExcluir = $('#confirmaExclusao');
    
    $scope.lista = [
        {
            local : 'Centro',
            sala : 'Sala 1',
            dataInicio : '2017/08/10 12:50:35',
            dataFim : '2017/08/10 12:50:35',
            responsavel : 'Lucas',
            cafe : 'sim',
            descricao : 'Alugado para Reunião'
        },
        {
            local : 'Centro 2',
            sala : 'Sala 2',
            dataInicio : '2017/08/10 12:50:35',
            dataFim : '2017/08/10 12:50:35',
            responsavel : 'Lucas',
            cafe : 'não',
            descricao : 'Alugado para Reunião 2'
        },
        {
            local : 'Centro 3',
            sala : 'Sala  3',
            dataInicio : '2017/08/10 12:50:35',
            dataFim : '2017/08/10 12:50:35',
            responsavel : 'Lucas',
            cafe : 'sim',
            descricao : 'Alugado para Reunião 3'
        }
    ];
    
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