import React from 'react';
import { useEffect } from 'react';
import LineList from '../../component/line-list';
import NavBar from '../../component/navbar';
import './alimentos.css';
import firebase from '../../config/firebase';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Alimentos() {
    const [alimentos, setAlimentos] = useState([]);
    const [paciente, setPaciente] = useState([]);
    
    const profissional = useSelector(state => state.usuarioEmail);

    var listaAlimentos = [];

    useEffect( () => {
        firebase.firestore().collection('alimentos').where('usuario', '==', profissional).get().then( async(resultadoCard)=> {
            
            await resultadoCard.docs.forEach( doc => {
                

                    listaAlimentos.push({
                        id: doc.id,
                        ...doc.data()
    
                    })
                    setAlimentos(listaAlimentos);

                
            })
            

        })
    },[]);
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
                        {alimentos.map(item=> <LineList itens={[item.nome, item.calorias, item.categoria ]}  link={`alimentos/edit/${item.id}`} />)
                        }
                       
                        
                    </table>
                </div>
            </main>
        </>
    );
}

export default Alimentos;