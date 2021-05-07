import React, { useState } from 'react';
import NavBar from '../../../component/navbar';
import './cadastrar-perfil.css';

function CadastrarPerfil() {
    const [alertAdd, setAlertAdd] = useState();
    return(
        <>
            <NavBar active="pacientes" />
            <main id="cad-perfil" className="cadastro">
                <div class="container col-lg-4 col-md-8 col-sm-12 row">
                    <h3 className="text-success mb-3 text-center">Cadastro de Paciente</h3>

                    <form class="col-lg-12 mb-4" action="alimentos.html">
                        <div class="form-group">
                            <label className="text-success" for="exampleFormControlInput1" >Nome Completo</label>
                            <input type="text" class="mb-4  text-success form-control" placeholder="Nome" id="nomeFormControlInput1" />
                        </div>
                        <div className="mb-2 form-group">
                            <label className="text-success" for="exampleInputEmail1">Usuario</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            
                        </div>
                        <div className="form-group mb-4">
                            <label className="text-success" for="exampleInputEmail1">Repita o Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            
                        </div>
                        <div className="mb-2 mt-1 form-group">
                            <label  className="text-success" for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        
                    </form>
                    {
                        alertAdd ? 
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <button onClick={ ()=>{setAlertAdd(!alertAdd)}} type="button" class="btn-close" aria-label="Close"></button>
                            </div>
                        : null
                    }
                    <small id="emailHelp" className="mb-3 form-text text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</small>
                    <button  onClick={()=>{setAlertAdd(!alertAdd)}}  class="btn btn-success">Salvar</button>
                </div>
            </main> 
        </>
    );
}

export default CadastrarPerfil;