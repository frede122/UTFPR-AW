import React, { useState, useEffect } from 'react';
import NavBar from '../../../component/navbar';
import AlertField from '../../../component/alertField';
import './cadastrar-cardapio.css';

import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../../config/firebase';

function CadastrarCardapio({match}){
    const [alertAdd, setAlertAdd] = useState(false);

    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState(false);
    const [nome, setNome] = useState();
    const [paciente, setPaciente] = useState();
    const [data, setData] = useState();
    const [dataS, setDataS] = useState();
    const [hora, setHora] = useState();
    const [calorias, setCalorias] = useState();
    const [descricao, setDescricao] = useState();
    const [tipo, setTipo] = useState("Comida");
    const [pacientes, setPacientes] = useState([]);
    const [alimentos, setAlimentos] = useState([]);
    const [textAlimentos, setTextAlimentos] = useState([]);

    const usuario = useSelector(state => state.usuarioEmail);    
    const [carregando, setCarregando] = useState(0);
    const [imagemAtual, setImagemAtual] = useState();
    const [imagemNova, setImagemNova] = useState();

    const storage = firebase.storage();
    const db = firebase.firestore();
    
    var listaPacientes = [];
    var listaAlimentos = [];
    var textA = [];

    useEffect( () => {
        if(match.params.idPost){
            firebase.firestore().collection('cardapios').doc(match.params.idPost).get().then( resultado => {
                setNome(resultado.data().nome);
                setPaciente(resultado.data().paciente);
                setTipo(resultado.data().tipo);
                setData(resultado.data().data);
                setHora(resultado.data().hora);
                setCalorias(resultado.data().calorias);
                setDescricao(resultado.data().descricao);
                setImagemAtual(resultado.data().imagem);
            });
        }
        listarPacientes();
        listarAlimentos();
    },[]);

    function atualizar() {
        setCarregando(1);
        setMsgTipo(null)

        if(imagemNova)
            storage.ref(`imagens/${imagemNova.name}`).put(imagemNova);
       
        db.collection('posts').doc(match.params.idPost).update({
            nome:nome,
            paciente: paciente,
            tipo: tipo,
            data: data,
            hora: hora,
            calorias: calorias,
            descricao: descricao,
            imagem: imagemNova ? imagemNova.name : imagemAtual
        }).then( ()=>{
            setCarregando(0);
            setMsg('Cardapio Cadastrado com sucesso!');
            setMsgTipo("ok");
            setTimeout(()=>{ setMsgTipo('');; }, 5000);
        }).catch( () =>{
            setMsgTipo('erro');
            setCarregando(0);
        })


    }


    function salvar(){

        if(!nome || !tipo || !paciente || !calorias || !imagemNova){
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

        storage.ref(`imagens/cardapios/${imagemNova.name}`).put(imagemNova).then( () => {
           var b =[];
            textAlimentos.map(item => {
                b.push(''+item);
            });

            db.collection('cardapios').add({
                nome: nome,
                date: new Date(),
                paciente: paciente,
                calorias: parseInt( calorias),
                descricao: descricao,
                usuario: usuario,
                alimentos: b,
                imagem: imagemNova.name,
                data: dataS,
                hora: hora

            }).then( ()=> {
                setCarregando(0);
                setMsg('Cardapio Cadastrado com sucesso!');
                setMsgTipo("ok");
                setTimeout(()=>{ setMsgTipo('');; }, 5000);

            }).catch(() =>{
                setMsgTipo('erro');
                setCarregando(0);
            })
        });
    }

    // Atualizar  

    function exclui(){
        db.collection('cardapios').doc(match.params.idPost).delete().then(()=>{
        })
        {<Redirect to="/home" ></Redirect>}
    }
    function atualizar() {
        setCarregando(1);
        setMsgTipo(null)

        if(imagemNova)
            storage.ref(`imagens/cardapios/${imagemNova.name}`).put(imagemNova);
       
        db.collection('cardapios').doc(match.params.idPost).update({
            nome: nome,
            paciente: paciente,
            calorias: parseInt( calorias),
            descricao: descricao,
            alimentos: alimentos ? alimentos : null,
            imagem: imagemNova ? imagemNova.name : imagemAtual
        }).then( ()=>{
            setCarregando(0);
            setMsg('Cardapio Alterado com sucesso!');
            setMsgTipo("ok");
            setTimeout(()=>{ setMsgTipo('');; }, 5000);
        }).catch( () =>{
            setMsgTipo('erro');
            setCarregando(0);
        })


    }


    function listarPacientes() {
        firebase.firestore().collection('usuarios').where('profissional', '==', usuario).get().then(async (resultado)=> {
            
            await resultado.docs.forEach( doc => {

                    listaPacientes.push({
                        id: doc.id,
                        ...doc.data()
                    })
            })
            
            setPacientes(listaPacientes);

        })
    }

    function listarAlimentos() {
        firebase.firestore().collection('alimentos').where('usuario', '==', usuario).get().then(async (resultado)=> {
            
            await resultado.docs.forEach( doc => {
                
                    listaAlimentos.push({
                        id: doc.id,
                        ...doc.data()
                    })
            })
            
            setAlimentos(listaAlimentos);

        })
    }

    return(
        <>
        <NavBar active="cardapio" />
        <main id="cad-cardapio" className="cadastro cardapio">
                <div class="container col-lg-4 col-md-8 col-sm-12 row">
                    <h3 className="text-success mb-3 text-center">Cadastro de Cardapio</h3>

                    <form class="col-lg-12 mb-4">
                        <div class="form-group">
                            <label className="text-success" for="exampleFormControlInput1" >Nome</label>
                            <input value={ nome }onChange={(e)=>setNome(e.target.value)} type="text" class="mb-4  text-success form-control" placeholder="Nome" id="nomeFormControlInput1" />
                        </div>
                        <div class="mb-4 form-group">
                            <label className="text-success" for="exampleFormControlSelect1" >Paciente</label>
                            
                            <select value={ paciente }onChange={(e)=>setPaciente(e.target.value)} class="form-control  text-success" placeholder="Paciente" id="CategoriaFormControlSelect1">
                                <option></option>
                                { pacientes.map( item => <option value={item.id}>{item.nome}</option>)}
                            </select>
                        </div>

                        <div className="form-group row">
                            <div className="col-6">
                                <label>Data:</label>
                                <input onChange={(e) => setDataS(e.target.value)} value={ data } type="date" className="form-control" />
                            </div>
                            <div className="col-6">
                                <label>Horario:</label>
                                <input onChange={(e) => setHora(e.target.value)} value={ hora } type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="mb-3 form-group">
                        <label className="text-success" for="exampleFormControlInput1">Calorias</label>
                        <input value={ calorias }onChange={(e)=>setCalorias(e.target.value)} type="number" className="form-control text-success"  placeholder="Caloria" id="caloriasFormControlInput1" />
                        </div>




                        <div className="mb-4 form-group">
                            <label className="row text-success">Alimentos: {textAlimentos.map( item => <>{item}, </>)}</label>
                            <button  type="button" data-bs-toggle="modal" data-bs-target="#alimentoModal" class="btn btn-success m-2">+</button>
                            <button  type="button" onClick={()=>setTextAlimentos([])} class="btn btn-success">Limpar</button>
                        


                            <div class="modal fade" id="alimentoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                
                                    <ul>
                                        
                                    {
                                        
                                        alimentos.map( item => <li onClick={()=>{textA.push(item.nome);setTextAlimentos(oldArray => [...oldArray, textA])}} data-bs-dismiss="modal"  class="item-alimento">{item.nome}</li>)
                                    }
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-success">Adicionar Alimento</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="mb-4 form-group">
                            <label className=" text-success">Upload de imagem:</label>
                            <input onChange={ (e) => { setImagemNova(e.target.files[0]);  } } type="file" className="form-control" />    
                        </div>
                        <div className="form-group">
                            <label  className="text-success" for="exampleFormControlTextarea1">Descrição</label>
                            <textarea value={ descricao }onChange={(e)=>setDescricao(e.target.value)} className="form-control text-success" placeholder="Descrição" id="exampleFormControlTextarea1" rows="3" />
                        </div>
                    </form>
                    
                    {msgTipo === 'erro' &&  <AlertField msgTipo={msgTipo} msg={msg} func={()=> setMsgTipo(null)} />}
                    {msgTipo === 'ok' && <AlertField msgTipo={msgTipo} msg={msg}  />}
                    {carregando ? <div class="spinner-border text-success" role="status"><span class="visually-hidden">Loading...</span></div> : 
                     <><button  onClick={match.params.idPost ? atualizar : salvar}  class="btn btn-success">Salvar</button>
                     {match.params.idPost ?<button  onClick={exclui}  class="btn mt-2 btn-success">Excluir</button>: null}</>
                    }
                </div>
            </main> 
        </>
    );
}

export default CadastrarCardapio;