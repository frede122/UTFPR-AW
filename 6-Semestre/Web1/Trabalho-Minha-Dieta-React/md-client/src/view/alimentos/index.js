import React from 'react';
import LineList from '../../component/line-list';
import NavBar from '../../component/navbar';
import './alimentos.css';

function Alimentos() {
    return(
        
        <>
            <NavBar active="alimentos"/>
            <main id="cad-alimentos" className="cadastro solidos">
                <div class="container col-12 row">
                    <h1>Lista de Alimentos</h1>
                    <hr class="separator solid" />
                    <table> 
                        <tr>
                            <th>Nome</th>
                            <th>Calorias</th>
                            <th>Categoria</th>
                        </tr>
                        <LineList itens={['Maçã', '310', 'solido']}  link={'ssd'} />
                        <LineList itens={['Banana', '328', 'solido']}  link={'ssd'} />
                        <LineList itens={['Pera', '145', 'solido']}  link={'ssd'} />
                        <LineList itens={['Vitamina banan com pera', '500', 'liquido']}  link={'ssd'} />
                        
                    </table>
                </div>
            </main>
        </>
    );
}

export default Alimentos;