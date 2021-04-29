import React from  'react';
import NavBar from '../../component/navbar';
import './perfil.css'

function Perfil(){
    return(
        <>
            <NavBar active="pacientes" />
            <h1>Lista de perfis de pacientes</h1>
        </>
    );
}

export default Perfil;