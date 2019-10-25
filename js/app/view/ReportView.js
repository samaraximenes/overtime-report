class ReportView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template(model) {

        return `
        <table id="tabelaForm" class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data:</th>
                        <th>Hora de Início:</th>
                        <th>Hora de Término:</th>
                        <th>Total de Minutos:</th>
                        <th>Demanda:</th>
                        <th>Justificativa:</th>
                        <th>Especificação:</th>
                        <th>Serviços Prestados:</th>
                    </tr>
                </thead>
                <tbody>
                ${model.listReport.map(n => { 
                    return `
                    <tr>
                        <td id="dataTabela">${DateHelper.dataParaTexto(n.data)}</td>
                        <td id="inicioTabela">${n.inicio}</td>
                        <td id="terminoTabela">${n.termino}</td>
                        <td id="minutosTabela">${n.minutos}</td>
                        <td id="demandaTabela">${n.demanda}</td>
                        <td id="justificativaTabela">${n.justificativa}</td>
                        <td id="especificacaoTabela">${n.especificacao}</td>
                        <td id="servicosPrestadosTabela">${n.servicoPrestado}</td>
                    </tr>
                    `
                }).join('')}
                </tbody>
                <tfoot>
                </tfoot>
        </table>
        `;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}


/**/