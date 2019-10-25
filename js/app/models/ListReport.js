class ListReport {

    constructor() {

        this._listReport = [];

    }

    adiciona(report) {

        this._listReport.push(report);

    }

    get listReport() {

        return [].concat(this._listReport);
    }

    retornaArray(){
        this._listReport.map()
    }
}