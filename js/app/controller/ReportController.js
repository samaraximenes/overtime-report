class ReportController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputCompetencia = $('#competencia');
        this._inputOrgaoRequisitante = $('#orgaoRequisitante');
        this._inputNome = $('#nome');
        this._inputMatricula = $('#matricula');
        this._inputData = $('#data');
        this._inputInicio = $('#inicio');
        this._inputTermino = $('#termino');
        this._inputMinutos = $('#minutos');
        this._inputDemanda = $('#demanda');
        this._inputJustificativa = $('#justificativa');
        this._inputEspecificacao = $('#especificacao');
        this._inputServicoPrestado = $('#servicoPrestado');
        this._inputInformacoesComplementares = $('#informacoesComplementares');
        this._listReport = new ListReport();

        this._reportView = new ReportView($('#reportView'));
        this._reportView.update(this._listReport);
    }

    adiciona(event) {

        event.preventDefault();
        this._listReport.adiciona(this._criaReport());
        this._reportView.update(this._listReport);
        this._limpaForm();
    }

    generatorDocument(){
        GeneratorReport.generatorReportThree(this._inputNome.value, this._inputMatricula.value, this._inputOrgaoRequisitante.value, this._inputCompetencia.value);
        GeneratorReport.generatorReportTwo(this._inputNome.value, this._inputMatricula.value, this._inputOrgaoRequisitante.value,this._inputCompetencia.value, this._inputInformacoesComplementares.value, this._listReport);
        GeneratorReport.generatorReportOne(this._inputNome.value, this._inputMatricula.value, this._inputOrgaoRequisitante.value, this._listReport);
    }

    _criaReport() {

        return new Report(
            DateHelper.textoParaData(this._inputData.value),
            this._inputInicio.value,
            this._inputTermino.value,
            this._inputMinutos.value,
            this._inputDemanda.value,
            this._inputJustificativa.value,
            this._inputEspecificacao.value,
            this._inputServicoPrestado.value
        );
    }

    _limpaForm() {

        this._inputData.value = '';
        this._inputInicio.value = '';
        this._inputTermino.value = '';
        this._inputMinutos.value = '';
        this._inputDemanda.value = '';
        this._inputJustificativa.value = '';
        this._inputEspecificacao.value = '';
        this._inputServicoPrestado.value = '';
        this._inputData.focus();
    }

}