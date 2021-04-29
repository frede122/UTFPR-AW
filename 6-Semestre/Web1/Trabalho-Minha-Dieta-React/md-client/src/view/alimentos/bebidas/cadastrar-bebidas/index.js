import React, { useState } from 'react';
import NavBar from '../../../../component/navbar';
import './cadastrar-bebidas.css';

function CadastrarBebidas() {
    const [alertAdd, setAlertAdd] = useState(false);
    return(
        <>
            <NavBar active="alimentos"/>
            
            <main id="cad-alimentos" className="bebidas">
                <div class="container col-lg-4 col-md-8 col-sm-12 row">
                    <h3 className="text-success mb-3 text-center">Cadastro de Bebidas</h3>

                    <form class="col-lg-12 mb-4" action="alimentos.html">
                        <div class="form-group">
                            <label className="text-success" for="exampleFormControlInput1" >Nome</label>
                            <input type="text" class="mb-4  text-success form-control" placeholder="Nome" id="nomeFormControlInput1" />
                        </div>
                        <div class="mb-4 form-group">
                            <label className="text-success" for="exampleFormControlSelect1" >Categoria</label>
                            <select class="form-control  text-success" placeholder="Categoria" id="CategoriaFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="mb-4 form-group">
                        <label className="text-success" for="exampleFormControlInput1">Calorias</label>
                        <input type="number" className="form-control text-success"  placeholder="Caloria" id="caloriasFormControlInput1" />
                        </div>
                        
                        <div className="form-group">
                            <label className="text-success" for="exampleFormControlTextarea1">Descrição</label>
                            <textarea className="form-control text-success" placeholder="Descrição" id="exampleFormControlTextarea1" rows="3" />
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
                    <button  onClick={()=>{setAlertAdd(!alertAdd)}}  class="btn btn-success">Salvar</button>
                </div>
            </main> 
        </>
    );
}

export default CadastrarBebidas;