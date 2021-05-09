import { useSelector, useDispatch} from 'react-redux';
import React from 'react';


function IsLogado(level){
    const tipo =useSelector(state => state.usuarioTipo);
    const user =useSelector(state => state.usuarioLogado);
    if((user >0) && (tipo >= level)){
        return true;
    }else{
        return false;
    }
}



export default IsLogado;