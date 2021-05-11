import React, { useEffect, useState } from 'react';
import './login.css';
import ImgLogin from '../../img/icon/login.svg';
import AlertField from '../../component/alertField';

import { Link, Redirect} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import firebase from '../../config/firebase';




function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [level, setLevel] = useState();
    const [uid, setUid] = useState();

    const dispatch = useDispatch();


    const db = firebase.firestore();
  
    useEffect(()=>{
 
        firebase.firestore().collection('usuarios').where('email', '==', email).get().then(async (resultado)=> {
            
            await resultado.docs.forEach( doc => {
                setLevel(doc.data().level);
                setUid(doc.id);
            })
            
        })
    
    });

    function autenticar() {
        
        firebase.auth().signInWithEmailAndPassword(email, senha).then( async resultado => {

            //alert(level);
            setMsgTipo('ok');
            setMsg("Conectado com sucesso!");
            setTimeout(()=>{
                dispatch({type: 'LOGIN', usuarioEmail: email, usuarioTipo:level, usuarioId: uid });
            }, 2000);
            
            
        }).catch(erro => {
            setMsg("mail ou senha incorreta, verifique e tente novamente!");
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
                        {msgTipo === 'erro' &&  <AlertField msgTipo={msgTipo} msg={msg} func={()=> setMsgTipo(null)} />}
                        {msgTipo === 'ok' && <AlertField msgTipo={msgTipo} msg={msg}  />}
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