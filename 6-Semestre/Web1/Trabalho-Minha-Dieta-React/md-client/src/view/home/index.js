import React, { useEffect, useState } from 'react';
import NavBar from '../../component/navbar';
import Postcard from '../../component/postcard';
import './home.css';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';


function Home() {
    var d = new Date();
    d.setHours(24)

    const [cardapios, setCardapios] = useState([]);
    
    const uid = useSelector(state => state.usuarioId);

    var listaCardapios = [];
    var urlImg = '';

    useEffect( () => {
        firebase.firestore().collection('cardapios').where('paciente', '==', uid).get().then( (resultadoCard)=> {
            
            resultadoCard.docs.forEach( doc => {  
                        listaCardapios.push({
                        id: doc.id,
                        ...doc.data()
                        
                    })
                })
                setCardapios(listaCardapios);
        })
    });


    return(
        <>
            <NavBar active="inicio"/>
            <div className="inicio main p-lg-5 p-md-3 p-sm-1 row m-0">
                <h2 className="text-success">Agenda</h2>
                <hr className="separete" />
                {cardapios.map(item => <Postcard id={item.id} data={item.data} titulo={item.nome} img={item.imagem} hora={item.hora}  data={item.data} descricao={item.descricao} alimentos={item.alimentos.join(", ")}/>)}
                
                <hr className="separete" />

            </div>
        </>
    );
}

export default Home;