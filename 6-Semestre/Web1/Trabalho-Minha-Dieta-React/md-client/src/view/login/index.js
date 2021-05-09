import React, { useEffect, useState } from 'react';
import { Link, Redirect} from 'react-router-dom';

import { useSelector, useDispatch} from 'react-redux';

import firebase from '../../config/firebase';


import NavBar from '../../component/navbar';
import './login.css';
import ImgLogin from '../../img/icon/login.svg';



function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [msgTipo, setMsgTipo] = useState();
    const [level, setLevel] = useState();

    const dispatch = useDispatch();


    const db = firebase.firestore();
  
    useEffect(()=>{
 
        firebase.firestore().collection('usuarios').where('email', '==', email).get().then(async (resultado)=> {
            
            await resultado.docs.forEach( doc => {
                setLevel(doc.data().level);
            })
            
        })
    
    });

    function autenticar() {
        
        firebase.auth().signInWithEmailAndPassword(email, senha).then( async resultado => {

            //alert(level);
            setTimeout(()=>{
                dispatch({type: 'LOGIN', usuarioEmail: email, usuarioTipo:level});
            }, 2000);
            
            
        }).catch(erro => {
            setMsgTipo('erro');  
        });
        
    }


    
    return(
        <>
        {
            useSelector(state => state.usuarioLogado) > 0 ? <Redirect to="/home" /> : null
        }
                    <ul className="area-link">
                        <li><Link to="/cadastrar-usuario">Cadastrar Novo Nutricionista</Link></li>
                        <li><Link to="">Contato!</Link></li>
                    </ul>
           
            <main id="menu-login">
                <div id="login">
                    <img className="icon" src={ImgLogin} />
                    <form action="index.html">
                        <div className="form-group">
                            <label className="text-success" for="exampleInputEmail1">Usuario</label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</small>
                        </div>
                        <div className="form-group">
                            <label  className="text-success" for="exampleInputPassword1">Password</label>
                            <input onChange={(e)=>setSenha(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        {
                            msgTipo === 'erro' &&   
                            <div class="mt-1 alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Vishhh!, =/ </strong> Email ou senha incorreta, verifique e tente novamente!
                                <button  type="button" class="btn-close" onClick={()=> setMsgTipo(null)} aria-label="Close"></button>
                            </div>

                        }

                        {msgTipo === 'ok' && <div className="mt-2 alert alert-success" role="alert">  Conectado com sucesso! </div>}



                        <div className="button-login row">
                            <button  onClick={autenticar} type="button" className="btn btn-success">Entrar</button>
                            
                        </div>

                    </form>
                    <Link to="/lost-password" className="color-success">Esqueci minha senha!</Link>
                </div>
            </main>
        </>    
    );
}

export default Login;