import React, { useState } from 'react';
import NavBar from '../../../component/navbar';
import './cadastrar-usuario.css';

import 'firebase/auth';
import firebase from '../../../config/firebase';

function CadastrarUsuario() {
    const [alertAdd, setAlertAdd] = useState(false);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [emailSec, setEmailSec] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState("");
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    const db = firebase.firestore();

    function salvar(){

        if(!email || !emailSec || !senha){
            setMsgTipo("erro");
            setMsg("Preencha todos os campos e tente novamente.");
        }else if(email !== emailSec){
            setMsgTipo("erro");
            setMsg("Emails não coincidem");
        }else if (senha.length < 5){
            setMsgTipo("erro");
            setMsg("Senha muito curta, a senha deve ter 5 ou mais caracteres");
        }else       
        {
            cadastrar();
        }
        
    }

    function cadastrar(){
        setCarregando(1);
        setMsgTipo(null);
        if(!email || !senha){
            setMsgTipo('erro');
            setMsg('Você não preencheu todos os campos!');
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado =>{
 

            db.collection('usuarios').doc(resultado.user.uid).add({
                email: email,
                date: new Date(),
                level: 0
    
            }).then(()=>{

                setCarregando(0);
                setMsgTipo('ok');
            })

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
            <NavBar active="pacientes" />
            <main id="cad-perfil" className="cadastro">
                <div class="container col-lg-4 col-md-8 col-sm-12 row">
                    <h3 className="text-success mb-3 text-center">Cadastro de Paciente</h3>

                    <form class="col-lg-12 mb-4" action="alimentos.html">
                        <div class="form-group">
                            <label className="text-success" for="exampleFormControlInput1" >Nome Completo</label>
                            <input onChange={(e)=> setNome(e.target.value)} type="text" class="mb-4  text-success form-control" placeholder="Nome" id="nomeFormControlInput1" />
                        </div>
                        <div className="mb-2 form-group">
                            <label className="text-success" for="exampleInputEmail1">Usuario</label>
                                <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            
                        </div>
                        <div className="form-group mb-4">
                            <label className="text-success" for="exampleInputEmail1">Repita o Email</label>
                                <input onChange={(e)=> setEmailSec(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            
                        </div>
                        <div className="mb-2 mt-1 form-group">
                            <label  className="text-success" for="exampleInputPassword1">Password</label>
                            <input onChange={(e)=> setSenha(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        
                    </form>

                    
                    { msgTipo === 'erro' &&  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Ahhh! </strong>{msg}
                        <button onClick={ ()=>{setMsgTipo("")}} type="button" class="btn-close" aria-label="Close"></button>
                        </div>
                    }
                    { msgTipo === 'ok' &&  <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Uah!</strong> Usuario Cadastrado com sucesso!.
                        <button onClick={ ()=>{setMsgTipo("")}} type="button" class="btn-close" aria-label="Close"></button>
                        </div>
                    }

                    { 
                        carregando ? <div class="spinner-border text-center text-success" role="status"><span class=" text-center visually-hidden">Loading...</span></div> 
                        : <><small id="emailHelp" className="mb-3 form-text text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</small>
                        <button  onClick={salvar}  class="btn btn-success">Salvar</button></>
                    }
                    
                </div>
            </main> 
        </>
    );
}

export default CadastrarUsuario;