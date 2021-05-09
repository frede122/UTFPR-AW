import React, {useState} from 'react';
import './lostpassword.css';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth';

function LostPassword(){
    const [email ,setEmail] = useState();
    const [msg, setMsg] = useState();
    const [alert, setAlert] = useState(0);
    const [carregando, setCarregando] = useState();

    function recuperarSenha(){
        
        setCarregando(1);
        setAlert(0);
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            
            setCarregando(0);
            setMsg('Um email para redifinir sua senha foi enviado em sua caixa de entrada');
            setAlert(1);
            setTimeout(()=>{ setAlert(0); }, 3000);
        }
        ).catch(error =>{
            setCarregando(0);
            setMsg('Por favor insira um email valido!');
            setAlert(1);
            setTimeout(()=>{ setAlert(0); }, 3000);
        });
    }

    return(
        <>



        <main id="contato" className="lostpass p-lg-5 p-md-3 p-sm-1 m-0">
            <div class="container col-lg-4 col-md-8 col-sm-12 row">
                <h3 className="text-success mb-3 text-center">Recuperar Senha</h3>

                <div class="form-group">
                    <label className="text-success" for="exampleFormControlInput1" >Email</label>
                    <input  onChange={e=> setEmail(e.target.value)} type="text" class="mb-4  text-success form-control" placeholder="Email" id="nomeFormControlInput1" />
                </div>
                {alert ? <div class="alert alert-warning" role="alert">{msg}</div> : null }                
                { carregando ? <div class="spinner-border text-center text-success" role="status"><span class=" text-center visually-hidden">Loading...</span></div> :
                <>
                    <button onClick={recuperarSenha} type="button" className="btn btn-lg btn-success bnt-enviar">Recuperar Senha</button>
                    <Link to="/login" className="text-center color-success">Login!</Link>
                </>
                }
            </div>
        </main> 



       
        </>
    );
}

export default LostPassword;