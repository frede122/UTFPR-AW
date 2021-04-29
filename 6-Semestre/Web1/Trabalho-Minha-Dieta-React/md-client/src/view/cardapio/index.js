import React from 'react';
import NavBar from '../../component/navbar';
import './cardapio.css';

function Cardapio(){
    return(
        <>
            <NavBar active="cardapio" />
            <h1>Lista de Cardapio</h1>
        </>
    );
}

export default Cardapio;