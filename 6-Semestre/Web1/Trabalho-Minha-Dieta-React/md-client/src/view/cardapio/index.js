import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './cardapio.css';

import LineList from '../../component/line-list';
import NavBar from '../../component/navbar';


import firebase from '../../config/firebase';

function Cardapio(){

    const [cardapios, setCardapios] = useState([]);
    const [paciente, setPaciente] = useState([]);
    
    const profissional = useSelector(state => state.usuarioEmail);

    var listaCardapios = [];

    useEffect( () => {
        firebase.firestore().collection('cardapios').where('usuario', '==', profissional).get().then( async(resultadoCard)=> {
            
            await resultadoCard.docs.forEach( doc => {
                
                firebase.firestore().collection('usuarios').doc(doc.data().paciente).get().then( resultadoUser =>{
       
                    
                    listaCardapios.push({
                        id: doc.id,
                        nomP: resultadoUser.data().nome,
                        ...doc.data()
    
                    })
                    setCardapios(listaCardapios);
                })

                
            })
            

        })
    },[]);


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
                        {cardapios.map(item=> <LineList itens={[item.nomP, item.calorias, item.data, item.hora]}  link={`cardapios/edit/${item.id}`} />)
                        }
                        
                    </table>
                </div>
            </main>
        </>
    );
}

export default Cardapio;