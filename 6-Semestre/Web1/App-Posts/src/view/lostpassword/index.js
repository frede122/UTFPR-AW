import React, {useState} from 'react';
import './lostpassword.css';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../components/navbar';

function LostPassword(){
    const [email ,setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Um email para redifinir sua senha foi enviado em sua caixa de entrada');
        }
        ).catch(error =>{
            setMsg('Por favor insira um email valido!');
        });
    }

    return(
        <>
        <Navbar />
        <form className="text-center form-login mx-auto mt-5">
            <h3 className="mb-3 font-weight-bold">Recuperação de Senha</h3>
            <input onChange={e=> setEmail(e.target.value)} className="form-control my-2" type="email" placeholder="E-mail" />
            
            <div className="msg my-8 mb-3">
                <span>{msg}</span>
            </div>

            <button onClick={recuperarSenha} type="button" className="btn btn-lg btn-block bnt-enviar">Recuperar Senha</button>
        </form>
        </>
    );
}

export default LostPassword;