import React, { useState } from 'react';
import NavBar from '../../../../component/navbar';
import './cadastrar-solidos.css';

function CadastrarSolidos(){

    const [alertAdd, setAlertAdd] = useState(false);
    return(
        <>
            <NavBar active="alimentos" />
            <main id="cad-alimentos" className="cadastro solidos">
                <div class="container col-lg-4 col-md-8 col-sm-12 row">
                    <h3 className="text-success mb-3 text-center">Cadastro de Alimentos</h3>

                    <form class="col-lg-12 mb-4" action="alimentos.html">
                        <div class="form-group">
                            <label className="text-success" for="exampleFormControlInput1" >Nome</label>
                            <input type="text" class="mb-4 form-control" placeholder="Nome" id="nomeFormControlInput1" />
                        </div>
                        <div class="mb-4 form-group">
                            <label className="text-success" for="exampleFormControlSelect1" >Categoria</label>
                            <select class="form-control" placeholder="Categoria" id="CategoriaFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                        <label className="text-success" for="exampleFormControlInput1">Calorias</label>
                        <input type="number" class="form-control"  placeholder="Caloria" id="caloriasFormControlInput1" />
                        </div>
                        
                        <span id="statusSave"></span>
                    </form>
                    {
                        alertAdd ? 
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <button onClick={ ()=>{setAlertAdd(!alertAdd)}} type="button" class="btn-close" aria-label="Close"></button>
                            </div>
                        : null
                    }
                    <button  onClick={()=>{setAlertAdd(!alertAdd)}}  class="btn btn-success">Salvar</button>
                </div>
            </main> 
        </>
    )
}

export default CadastrarSolidos;