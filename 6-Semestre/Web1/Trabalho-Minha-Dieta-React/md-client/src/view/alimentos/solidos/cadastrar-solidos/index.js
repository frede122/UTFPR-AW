import React, { useState } from 'react';
import NavBar from '../../../../component/navbar';
import './cadastrar-solidos.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../../../../config/firebase';

function CadastrarSolidos(){

    const [alert, setAlert] = useState(false);
    const [msg, setMsg] = useState(false);

    const [nome, setNome] = useState();
    const [categoria, setCategoria] = useState();
    const [calorias, setCalorias] = useState();
    const [descricao, setDescricao] = useState();
    const [tipo, setTipo] = useState("Comida");

    const usuario = useSelector(state => state.usuarioEmail);    
    const [carregando, setCarregando] = useState(0);
     

    const db = firebase.firestore();

    function cadastrar(){
        setCarregando(1);
        db.collection('alimentos').add({
            nome: nome,
            date: new Date(),
            categoria: categoria,
            calorias: parseInt( calorias),
            descricao: descricao,
            usuario: usuario,
            tipo: tipo

        }).then( ()=> {
            setCarregando(0);
            setMsg('Alimento Cadastrado com sucesso!');
            setAlert(true);
            setTimeout(()=>{ setAlert(false); }, 5000);

        });
    }


    return(
        <>
            <NavBar active="alimentos" />
            <main id="cad-alimentos" className="cadastro solidos">
                <div class="container col-lg-4 col-md-8 col-sm-12 row">
                    <h3 className="text-success mb-3 text-center">Cadastro de Alimentos</h3>

                    <form class="col-lg-12 mb-4" action="alimentos.html">
                        <div class="form-group">
                            <label className="text-success" for="exampleFormControlInput1" >Nome</label>
                            <input onChange={(e)=>setNome(e.target.value)} type="text" class="mb-4 form-control" placeholder="Nome" id="nomeFormControlInput1" />
                        </div>

                        <div class="mb-4 form-group">
                            <label className="text-success" for="exampleFormControlSelect1" >Tipo</label>
                            <select value={tipo} onChange={(e)=>setTipo(e.target.value)} class="form-control" placeholder="Tipo de alimentos" id="CategoriaFormControlSelect1">
                                <option>Comida</option>
                                <option>Bebida</option>
                            </select>
                        </div>



                        {
                        tipo === "Comida" &&
                            <div class="mb-4 form-group">
                                <label className="text-success" for="exampleFormControlSelect1" >Categoria</label>
                                <select onChange={(e)=>setCategoria(e.target.value)} class="form-control" placeholder="Categoria" id="CategoriaFormControlSelect1">
                                    <option>Carboidratos</option>
                                    <option>Legumes</option>
                                    <option>Frutas</option>
                                    <option>Leite e derivados</option>
                                    <option>Carnes</option> 
                                    <option>Leguminosas e oleaginosas</option> 
                                    <option>Óleos</option> 
                                    <option>Açucares</option> 
                                </select>
                            </div>
                        }
                        {
                        tipo === "Bebida" &&
                            <div class="mb-4 form-group">
                                <label className="text-success" for="exampleFormControlSelect1" >Categoria</label>
                                <select onChange={(e)=>setCategoria(e.target.value)} class="form-control" placeholder="Categoria" id="CategoriaFormControlSelect1">
                                    <option>Carboidratos</option>
                                    <option>Legumes</option>
                                    <option>Frutas</option>
                                    <option>Leite e derivados</option>
                                    <option>Carnes</option> 
                                    <option>Leguminosas e oleaginosas</option> 
                                    <option>Óleos</option> 
                                    <option>Açucares</option> 
                                </select>
                            </div>
                        }




                        
                        <div class="form-group">
                        <label className="text-success" for="exampleFormControlInput1">Calorias</label>
                        <input onChange={(e)=>setCalorias(e.target.value)} type="number" class="form-control"  placeholder="Caloria" id="caloriasFormControlInput1" />
                        </div>
                        <div className="mt-4 form-group">
                            <label className="text-success" for="exampleFormControlTextarea1">Descrição</label>
                            <textarea onChange={(e)=>setDescricao(e.target.value)} className="form-control text-success" placeholder="Descrição" id="exampleFormControlTextarea1" rows="3" />
                        </div>
                        
                        <span id="statusSave"></span>
                    </form>
                    {
                        alert ? 
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Uau!!!</strong> {msg}.
                                <button onClick={ ()=>{setAlert(!alert)}} type="button" class="btn-close" aria-label="Close"></button>
                            </div>
                        : null
                    }
                    <div className="row">
                    { 
                        carregando ? <div class="spinner-border text-success" role="status"><span class="visually-hidden">Loading...</span></div> 
                        : <button  onClick={cadastrar}  class="btn btn-success">Salvar</button>
                    }
                    </div>
                </div>
            </main> 
        </>
    )
}

export default CadastrarSolidos;