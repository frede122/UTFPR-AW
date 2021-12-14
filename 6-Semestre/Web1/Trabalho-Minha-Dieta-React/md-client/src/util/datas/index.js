import React from 'react';

function ReturnIdade(data){
    var hoje = '';
    const mesHoje = new Date().getMonth();
    const anoHoje = new Date().getFullYear();    
    const diaHoje =  new Date().getUTCDay();

    const mesAniv = new Date(data).getMonth();
    const anoAniv = new Date(data).getFullYear();    
    const diaAniv =  new Date(data).getDay();

    if(mesHoje >= mesAniv){
        if((mesHoje === mesAniv) && (diaHoje < diaAniv)){
            return ((anoHoje - anoAniv) - 1 );
        }else{
            return (anoHoje - anoAniv);
        }

    }else{
        return ((anoHoje - anoAniv) - 1 );
    }

}

function ReturnData(data) {
    var mesL = '';
    const mes = new Date(data).getMonth();
    const ano = new Date(data).getFullYear();    
    const dia =  new Date(data).getDay();
    switch(mes) {
        case 1:
            mesL = "Janeiro";
        break;
        case 2:
            mesL = "Fevereiro";
        break;
        case 3:
            mesL = "Março";
        break;
        case 4:
            mesL = "Abril";
        break;
        case 5:
            mesL = "Maio";
        break;
        case 6:
            mesL = "Junho";
        break;
        case 7:
            mesL = "Julho";
        break;
        case 8:
            mesL = "Agosto";
        break;
        case 9:
            mesL = "Setembro";
        break;
        case 10:
            mesL = "Outubro";
        break;
        case 11:
            mesL = "Novembro";
        break;
        case 12:
            mesL = "Dezembro";
        break;
        
        default:
            mesL = "";
    }

    return dia + " de " + mesL + " de " +ano;
}

export {ReturnIdade, ReturnData} ;