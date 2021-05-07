import React from  'react';
import { Link } from 'react-router-dom';
import LineList from '../../component/line-list';
import NavBar from '../../component/navbar';
import './perfil.css'

function Perfil(){
    return(
        <>
            <NavBar active="pacientes" />
            <main id="cad-perfil" className="cadastro">
                <div className="container col-12 row">
                    <h1>Lista de perfis de pacientes</h1>
                    <hr class="separator solid " />
                    <table> 
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Endereço</th>
                        </tr>
                        <LineList itens={['Frederson Mandu de Oliveira', '30', 'Fazenda Arizona']}  link={'ssd'} />
                        <LineList itens={['Paula Fernanda Correa', '28', 'Fazenda Arizona']}  link={'ssd'} />
                        <LineList itens={['Debora Regina Correa', '45', 'Ibaiti']}  link={'ssd'} />
                        <LineList itens={['sasda', 'sdfsdf', '5545']}  link={'ssd'} />
                        <LineList itens={['sasda', 'sdfsdf', '5545']}  link={'ssd'} />
                    </table>

                </div>
            </main>
        </>
    );
}

export default Perfil;