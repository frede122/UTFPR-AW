import React, { useEffect, useState } from  'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LineList from '../../component/line-list';
import NavBar from '../../component/navbar';
import './usuario.css'
import firebase from '../../config/firebase'

function Usuario(){

    const [users, setUsers] = useState([]);

    const usuarioEmail = useSelector(state => state.usuarioEmail);
    const dataHoje = new Date().getFullYear();


    var listaUsers = [];
    var datafinal = new Date();
    var datainicial = new Date();
    var idade = 0;
    useEffect( () => {
        firebase.firestore().collection('usuarios').where('profissional', '==', usuarioEmail).get().then(async (resultado)=> {

            await resultado.docs.forEach( doc => {
                

                    listaUsers.push({
                        id: doc.id,
                        ...doc.data()
                    })
                
            })
            
            setUsers(listaUsers);

        })
    })
    return(
        <>
            <NavBar active="pacientes" />
            <main id="cad-perfil" className="cadastro">
                <div className="container col-12 row">
                    <h1>Perfis de pacientes</h1>
                    <hr class="separator solid " />
                    <table> 
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Endereço</th>
                        </tr>
                        { users.map( item =><LineList itens={[item.nome, item.email, item.endereco]}  link={`/usuario/edit/${item.id}`} /> ) }
                        
                    </table>

                </div>
            </main>
        </>
    );
}

export default Usuario;