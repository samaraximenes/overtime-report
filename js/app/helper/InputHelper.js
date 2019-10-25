class InputHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');
    }

    static devolveOrgaoRequisitante(orgaoRequisitante) {
        if (orgaoRequisitante == 'D2DP')
            return 'Divisão de Desenvolvimento de Produtos do Ceará - D2DP';

        return 'Divisão de Gestão de Capacidade do Ceará - D2GC';
    }

    static devolveBoss(orgaoRequisitante) {
        if (orgaoRequisitante == 'D2DP')
            return 'Marcio Mendes de Lima - 334022';

        return 'Maria Jocelia Silva - 337137';
    }

    static devolveCodigoComponente(orgaoRequisitante) {
        if (orgaoRequisitante == 'D2DP')
            return '06.2.02.001.000';

        return '06.2.02.002.000';
    }

    static contarCaracteres(box, valor, campospan) {
        var conta = valor - box.length;
        document.getElementById(campospan).innerHTML = "Você ainda pode digitar " + conta + " caracteres";
        if (box.length >= valor) {
            document.getElementById(campospan).innerHTML = "Opss.. você não pode mais digitar..";
            console.log(document.getElementById(campospan).value);
        }
        if(box.length == 0){
            document.getElementById(campospan).value = '';
        }
    }
}