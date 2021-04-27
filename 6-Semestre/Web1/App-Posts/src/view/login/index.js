import React, {useState} from 'react';
import './login.css';

import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link, Redirect } from 'react-router-dom';

import { useSelector, useDispatch} from 'react-redux';


function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function autenticar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then( resultado => {
            setMsgTipo('ok');
            setTimeout(()=>{
                dispatch({type: 'LOGIN', usuarioEmail: email});
            }, 2000);

        })
        .catch(erro => {
            setMsgTipo('erro');
        });

       
    }
    
    return(
        <div className="login-content">
            {
                useSelector(state => state.usuarioLogado) > 0 ? <Redirect to="/home" /> : null
            }
            <form className="text-center form-signin">
                <i className="fas fa-users fa-8x mb-5 text-white"></i>
                <h1 className="h3 text-center mb-3 fw-normal text-white font-weight-bold">Login!</h1>
                <h1 className="h3 text-center mb-3 fw-normal text-white font-weight-bold">{email}- {senha}</h1>

                <div className="form-floating my-2">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email </label>
                </div>
                <div className="form-floating my-2">
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Senha</label>
                </div>


                <button className="w-100 btn btn-lg btn-login my-2" onClick={autenticar} type="button">Sign in</button>

                <div className="text-white text-center my-4">
                    { msgTipo === 'ok' &&  <span><strong>Uau!</strong> voce se conectou no sistema &#128578;</span>}

                    { msgTipo === 'erro' && <span><strong>Ah!</strong> Por favor verifique se o seu email e senha estão corretos  &#128557;</span>}
                </div>



                <div className="option-login mt-2">
                    <Link className="mx-2" to="/lostpassword">Recuperar senha</Link>
                    <Link className="mx-2"to="newuser">Quero me cadastrar</Link></div>
                <p className="mt-5 mb-3 text-muted">© 2021</p>
                
            </form>
        </div>
    );
}

export default Login;
