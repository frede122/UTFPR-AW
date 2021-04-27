import React, {useState} from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './newUser.css';
import Navbar from '../../components/navbar';


function NewUser(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msg, setMsg] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar(){
        setCarregando(1);
        setMsgTipo(null);
        if(!email || !senha){
            setMsgTipo('erro');
            setMsg('Você não preencheu todos os campos!');
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado =>{
            setCarregando(0);
            setMsgTipo('ok');
        }).catch(erro=> {
            setCarregando(0);
            setMsgTipo('erro');
            switch(erro.message) {
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter no minimo 6 caracteres');
                break;
                case 'The email address is already in use by another account.':
                    setMsg('Esse e-mail ja esta sendo usado por outra conta');
                break;
                     
                case 'The email address is badly formatted.':
                    setMsg('O formato do e-mail é invalido!');
                break;
                default:
                    setMsg('Não foi possivel cadastrar. Por favor, tente mais tarde!');
            }
        });
    }

    return(
        <>
            <Navbar />
            <div className="forme-cadastro">
                <form className="text-center form-login mx-auto mt-5">
                    <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="E-mail" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />


                    { 
                        carregando ? <div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div> 
                        : <button onClick={cadastrar} type="button" className="btn btn-lg mt-3 mb-5 btn-cadastro">Cadastrar</button>
                    }
                    

                    <div className="text-black text-center my-4">
                        { msgTipo === 'ok' &&  <span><strong>Uau!</strong> Usuário cadastro com sucesso! &#128578;</span>}

                        { msgTipo === 'erro' && <span><strong>Ah!</strong>{msg}  &#128557;</span>}
                    </div>
                </form>
            </div>
        </>
    );
}

export default NewUser;
