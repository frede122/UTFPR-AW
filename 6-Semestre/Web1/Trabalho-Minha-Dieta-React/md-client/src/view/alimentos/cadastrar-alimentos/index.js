import React, { useState, useEffect } from 'react';
import NavBar from '../../../component/navbar';
import './cadastrar-solidos.css';
import AlertField from '../../../component/alertField';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebase';

function CadastrarSolidos({match}){

    const [msgTipo, setMsgTipo] = useState();
    const [alert, setAlert] = useState(false);
    const [msg, setMsg] = useState(false);

    const [nome, setNome] = useState();
    const [categoria, setCategoria] = useState();
    const [data, setData] = useState();
    const [calorias, setCalorias] = useState();
    const [descricao, setDescricao] = useState();
    const [tipo, setTipo] = useState("Comida");

    const [carregando, setCarregando] = useState(0);

    const usuario = useSelector(state => state.usuarioEmail);    
     

    const storage = firebase.storage();
    const db = firebase.firestore();
    
    useEffect( () => {
        if(match.params.idPost){
            firebase.firestore().collection('alimentos').doc(match.params.idPost).get().then( resultado => {
                setNome(resultado.data().nome);
                setCategoria(resultado.data().categoria);
                setTipo(resultado.data().tipo);
                setData(resultado.data().data);
                setDescricao(resultado.data().descricao);
            });
        }
    },[]);

    function salvar(){

        if(!nome || !tipo || !categoria || !tipo || !calorias || !descricao ){
            setMsgTipo("erro");
            setMsg("Preencha todos os campos e tente novamente.");
        }else       
        {
            cadastrar();
        }
        
    }

    // Cadastrar 

    function cadastrar(){
        setCarregando(1);

            db.collection('alimentos').add({
                nome: nome,
                date: new Date(),
                categoria: categoria,
                calorias: parseInt( calorias),
                descricao: descricao,
                usuario: usuario,
                tipo: tipo,

            }).then( ()=> {
                setCarregando(0);
                setMsg('Alimento Cadastrado com sucesso!');
                setMsgTipo("ok");
                // setTimeout(()=>{ setAlert(false); }, 5000);

            }).catch(() =>{
                setMsgTipo('erro');
                setCarregando(0);
            })
    }

    // Atualizar  

    function atualizar() {
        setCarregando(1);
        setMsgTipo(null)

       
        db.collection('alimentos').doc(match.params.idPost).update({
            nome: nome,
            categoria: categoria,
            calorias: parseInt( calorias),
            descricao: descricao,
            tipo: tipo,
        }).then( ()=>{
            setMsgTipo('ok');
            setCarregando(0);
        }).catch( () =>{
            setMsgTipo('erro');
            setCarregando(0);
        })


    }



    return(
        <>
            <NavBar active="alimentos" />
            <main id="cad-alimentos" className="cadastro solidos">
                <div class="container col-lg-4 col-md-8 col-sm-12 row">
                    <h3 className="text-success mb-3 text-center">Cadastro de Alimentos</h3>

                    <form class="col-lg-12 mb-2" action="alimentos.html">
                        <div class="form-group">
                            <label className="text-success" for="exampleFormControlInput1" >Nome</label>
                            <input onChange={(e)=>setNome(e.target.value)} type="text" class="mb-4 form-control" placeholder="Nome" id="nomeFormControlInput1" />
                        </div>

                        <div class="mb-2 form-group">
                            <label className="text-success" for="exampleFormControlSelect1" >Tipo</label>
                            <select value={tipo} onChange={(e)=>setTipo(e.target.value)} class="form-control" placeholder="Tipo de alimentos" id="CategoriaFormControlSelect1">
                                <option>Comida</option>
                                <option>Bebida</option>
                            </select>
                        </div>



                        {
                        tipo === "Comida" &&
                            <div class="mb-2 form-group">
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
                            <div class="mb-2 form-group">
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

                        {/* <div className="form-group">
                            <label className="mt-2 text-success">Upload de imagem:</label>
                            <input onChange={ (e) => { setImagemNova(e.target.files[0]);  } } type="file" className="form-control" />    
                        </div> */}

                        <div className="mt-2 form-group">
                            <label className="text-success" for="exampleFormControlTextarea1">Descrição</label>
                            <textarea onChange={(e)=>setDescricao(e.target.value)} className="form-control text-success" placeholder="Descrição" id="exampleFormControlTextarea1" rows="3" />
                        </div>
                        
                        <span id="statusSave"></span>
                    </form>
                    
                    {msgTipo === 'erro' &&  <AlertField msgTipo={msgTipo} msg={msg} func={()=> setMsgTipo(null)} />}
                    {msgTipo === 'ok' && <AlertField msgTipo={msgTipo} msg={msg}  />}
                
                    <div className="row">
                    { 
                        carregando ? <div class="spinner-border text-success" role="status"><span class="visually-hidden">Loading...</span></div> 
                        : <button  onClick={salvar}  class="btn btn-success">Salvar</button>
                    }
                    </div>
                </div>
            </main> 
        </>
    )
}

export default CadastrarSolidos;