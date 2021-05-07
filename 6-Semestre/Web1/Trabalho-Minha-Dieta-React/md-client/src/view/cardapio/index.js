import React from 'react';
import LineList from '../../component/line-list';
import NavBar from '../../component/navbar';
import './cardapio.css';

function Cardapio(){
    return(
        <>
            <NavBar active="cardapio" />
            <main id="cad-cardapio" className="cadastro cardapio">
                <div class="container col-12 row">

                    <h1>Lista de Cardapio</h1>
                    <hr class="separator solid" />
                    <table> 
                        <tr>
                            <th>Paciente</th>
                            <th>Calorias</th>
                            <th>dia</th>
                            <th>Horario</th>
                        </tr>
                        <LineList itens={['Frederson M O', '310', '5/5/2021', '10:00']}  link={'ssd'} />
                        <LineList itens={['Paula F Correa', '328', '6/5/2021', '9:00']}  link={'ssd'} />
                        <LineList itens={['Florisa de j', '145', '5/5/2021', '9:00']}  link={'ssd'} />
                        <LineList itens={['Frederico Pedro de Oliveira', '500', '15/6/2021', '8:00']}  link={'ssd'} />
                        
                    </table>
                </div>
            </main>
        </>
    );
}

export default Cardapio;