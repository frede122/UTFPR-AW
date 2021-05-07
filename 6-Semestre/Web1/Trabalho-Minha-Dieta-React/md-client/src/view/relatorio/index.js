import React from 'react';
import LineList from '../../component/line-list';
import NavBar from '../../component/navbar';
import './relatorio.css';

function Relatorio(){
     return(
         <>
            <NavBar active="relatorio" />
            <main id="relatorio" className="main p-lg-5 p-md-3 p-sm-1 row m-0">
            
                <div class="container col-12 row">
                    <h1>Relatorio Geral</h1>
                    <hr class="separator solid"/>
                    <table> 
                        <tr>
                            <th>Paciente</th>
                            <th>Cardapio</th>
                            <th>Calorias</th>
                            <th>dia</th>
                            <th>Horario</th>
                        </tr>
                        <LineList itens={['Frederson M O', 'vegetariano', '310', '5/5/2021', '10:00']}   />
                        <LineList itens={['Paula F Correa', 'emagrecimento','328', '6/5/2021', '9:00']}   />
                        <LineList itens={['Florisa de j', 'proteina', '145', '5/5/2021', '9:00']}  />
                        <LineList itens={['Frederico Pedro de Oliveira', 'vegetariano', '500', '15/6/2021', '8:00']}   />
                        
                    </table>
                </div>

            </main>
         </>
     );
}

export default Relatorio;