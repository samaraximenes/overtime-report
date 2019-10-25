class DateHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static diaUtilAnterior(data) {
        if (data.getDate() == this.verificaFeriado(data).getDate() && data.getMonth() == this.verificaFeriado(data).getMonth()) {
            data = this.verificaFeriado(data);
            if (data.getDay() == 1) {
                return `${data.getDate() - 3}/${data.getMonth() + 1}/${data.getFullYear()}`;
            }
            else if (data.getDay() == 0) {
                return `${data.getDate() - 2}/${data.getMonth() + 1}/${data.getFullYear()}`;
            }
            else {
                return `${data.getDate() - 1}/${data.getMonth() + 1}/${data.getFullYear()}`;
            }
        }
        else {
            data = this.verificaFeriado(data);
            if (data.getDay() == 0) {
                return `${data.getDate() - 2}/${data.getMonth() + 1}/${data.getFullYear()}`;
            }
            else {
                return `${data.getDate() - 1}/${data.getMonth() + 1}/${data.getFullYear()}`;

            }
        }
    }

    static anoCompetencia() {
        let date = new Date();

        return date.getFullYear();
    }

    static ultimoUtilMes(competencia) {
        let mesCompetencia = 0;
        switch (competencia) {
            case 'Janeiro':
                mesCompetencia = 0;
                break;
            case 'Fevereiro':
                mesCompetencia = 1;
                break;
            case 'Março':
                mesCompetencia = 2;
                break;
            case 'Abril':
                mesCompetencia = 3;
                break;
            case 'Maio':
                mesCompetencia = 4;
                break;
            case 'Junho':
                mesCompetencia = 5;
                break;
            case 'Julho':
                mesCompetencia = 6;
                break;
            case 'Agosto':
                mesCompetencia = 7;
                break;
            case 'Setembro':
                mesCompetencia = 8;
                break;
            case 'Outubro':
                mesCompetencia = 9;
                break;
            case 'Novembro':
                mesCompetencia = 10;
                break;
            case 'Dezembro':
                mesCompetencia = 11;
                break;
        }

        let data = new Date();
        let ano = data.getFullYear();
        let ultimoDia = (new Date(ano, mesCompetencia + 1, 0)).getDate();

        data = new Date(ano, mesCompetencia, ultimoDia);
        data = this.verificaFeriado(data);

        if (data.getDay() == 0) {
            return `${data.getDate() - 2}/${data.getMonth() + 1}/${data.getFullYear()}`;
        }
        else if (data.getDay() == 6) {
            return `${data.getDate() - 1}/${data.getMonth() + 1}/${data.getFullYear()}`;
        }
        else {
            return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

        }
    }

    static listaFeriados() {

        //Definindo Feriados Fixos
        let data = new Date;
        let datas = [new Date(data.getFullYear(), 0, 1),      //Ano Novo 01/01
        new Date((data.getFullYear()-1), 11, 31),             // Antecessor Ano Novo 31/12 Ano Anterior
        new Date(data.getFullYear(), 11, 31),                 // Antecessor Ano Novo 31/12 
        new Date(data.getFullYear(), 9, 12),                  // Nossa Senhora Aparecida 12/10
        new Date(data.getFullYear(), 10, 15),                 // Proclamação da Republica 15/11
        new Date(data.getFullYear(), 7, 15),                  // Nossa Senhora da Assunção (Fortaleza) 15/08
        new Date(data.getFullYear(), 2, 19),                  // São José (Ceará) 19/03 
        new Date(data.getFullYear(), 3, 21),                  // Tiradentes 21/04
        new Date(data.getFullYear(), 4, 1),                   // Dia do Trabalho 01/05
        new Date(data.getFullYear(), 8, 7),                   // Independência 07/09
        new Date(data.getFullYear(), 10, 2),                  // Finados 02/11 
        new Date(data.getFullYear(), 11, 25),                 // Natal 25/12
        new Date(data.getFullYear(), 11, 24),                 // Antecessor Natal 24/12 
        ];

        /* Definindo Feriados Mutáveis (Carnaval,
         Quarta-Feira de Cinzas,
         Paixão de Cristo,
         Corpus Christi,
         Pascoa) */

        let mes = 0, dia = 0;
        let ano = data.getFullYear();
        let X = 24;
        let Y = 5;
        let a = ano % 19;
        let b = ano % 4;
        let c = ano % 7;
        let d = (19 * a + X) % 30
        let e = (2 * b + 4 * c + 6 * d + Y) % 7
        let soma = d + e

        if (soma < 10) {
            dia = (d + e + 22);
            mes = 2;
        } else {
            dia = (d + e - 9);
            mes = 3;
        }

        let pascoa = new Date(ano, mes, dia);
        let segundaCarnaval = new Date(pascoa.getTime() - (48 * 24 * 60 * 60 * 1000));
        let carnaval = new Date(pascoa.getTime() - (47 * 24 * 60 * 60 * 1000));
        let quartaCinza = new Date(pascoa.getTime() - (46 * 24 * 60 * 60 * 1000));
        let sextaPaixao = new Date(pascoa.getTime() - (2 * 24 * 60 * 60 * 1000));
        let corpusChristi = new Date(pascoa.getTime() + (60 * 24 * 60 * 60 * 1000));
        datas.push(pascoa, carnaval, quartaCinza, sextaPaixao, corpusChristi, segundaCarnaval);

        return datas;
    }

    static verificaFeriado(data) {

        let arrayFeriados = this.listaFeriados();
        var i = 0;

        do {
            if (arrayFeriados[i].getDate() == data.getDate() &&
                arrayFeriados[i].getMonth() == data.getMonth() &&
                arrayFeriados[i].getFullYear() == data.getFullYear()) {

                data = new Date(data.getTime() - (1 * 24 * 60 * 60 * 1000));
                i = 0;
            } else {
                i+=1;
            }
        } while (i != arrayFeriados.length);

        return data;

    }


}

