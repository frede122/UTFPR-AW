import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import './newpost.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar';
import firebase from '../../config/firebase'

function NewPost({match}) {

    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [categoria, setCategoria] = useState();
    const [descricao, setDescricao] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [imagem, setImagem] = useState();
    const [carregando, setCarregando] = useState(0);
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    const [imagemAtual, setImagemAtual] = useState();
    const [imagemNova, setImagemNova] = useState();
    

    const storage = firebase.storage();
    const db = firebase.firestore();

    useEffect( () => {
        if(match.params.idPost){
            firebase.firestore().collection('posts').doc(match.params.idPost).get().then( resultado => {
                setTitulo(resultado.data().titulo);
                setCategoria(resultado.data().categoria);
                setData(resultado.data().data);
                setHora(resultado.data().hora);
                setDescricao(resultado.data().descricao);
                setImagemAtual(resultado.data().imagem);
            });
        }
    },[]);
 
    function atualizar() {
        setCarregando(1);
        setMsgTipo(null)

        if(imagemNova)
            storage.ref(`imagens/${imagemNova.name}`).put(imagemNova);
       
        db.collection('posts').doc(match.params.idPost).update({
            titulo: titulo,
            descricao: descricao,
            data: data,
            hora: hora,
            categoria: categoria,
            imagem: imagemNova ? imagemNova.name : imagemAtual
        }).then( ()=>{
            setMsgTipo('ok');
            setCarregando(0);
        }).catch( () =>{
            setMsgTipo('erro');
            setCarregando(0);
        })


    }

    function cadastrar() {
        setCarregando(1);

        storage.ref(`imagens/${imagemNova.name}`).put(imagemNova).then( () => {
            db.collection('posts').add({
                titulo: titulo,
                descricao: descricao,
                data: data,
                hora: hora,
                imagem: imagemNova.name,
                public: 1,
                criacao: new Date(),
                usuario: usuarioEmail,
                categoria: categoria,
                visualizacoes: 0
            }).then( ()=>{
                setMsgTipo('ok');
                setCarregando(0);
            }).catch( () =>{
                setMsgTipo('erro');
                setCarregando(0);
            })


        });
    }


    return(
        <>
            <Navbar />
            <div className="col-12 p-5">
                <div className="row">
                    <h3 className="mx-auto text-center font-weight-bold">{ match.params.idPost ? 'Atualizar Post' : 'Cadastrar Post'}</h3>
                </div>
                <form className="row justify-content-center">
                    <div className="form-group">
                        <label>Titulo</label>
                        <input onChange={(e) => setTitulo(e.target.value)} type="text" value={ titulo } className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Descrição do post</label>
                        <textarea onChange={(e) => setDescricao(e.target.value)} value={ descricao } rows="4" typ="text" className="form-control" />
                    </div>
                    < div onChange={(e) => setCategoria(e.target.value)} className="form-group"  value={ categoria }>
                        <label>Selecione a categoria do post</label>
                        <select className="form-control">
                            <option disabled selected value>--- Selecione a categoria</option>
                            <option>Pessoal</option>
                            <option>Universidade</option>
                            <option>Academia</option>
                            <option>Trabalho</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input onChange={(e) => setData(e.target.value)} value={ data } type="date" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Horario:</label>
                            <input onChange={(e) => setHora(e.target.value)} value={ hora } type="time" className="form-control" />
                        </div>
                    </div>


                    <div className="form-group">
                            <label>Upload de imagem:</label>
                            <input onChange={ (e) => { setImagemNova(e.target.files[0]);  } } type="file" className="form-control" />
                            
                    </div>
                    <div className="row">
                    { 
                        carregando ? <div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div> 
                        : <button type="button" onClick={match.params.idPost ? atualizar : cadastrar} className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">{match.params.idPost ? 'Atualizar Post' : 'Cadastrar Post'}</button>
                    }
                    </div>
                    
                    

                </form>
                <div className="text-center my-4">
                    { msgTipo === 'ok' &&  <span><strong>Uau!</strong> Post {match.params.idPost ? 'atualizado ' : 'cadastrado '}com sucesso! &#128578;</span>}
                    { msgTipo === 'erro' && <span><strong>Ah!</strong> Erro ao cadastrar post &#128557;</span>}
                </div>

            </div>
        </>
    );
}

export default NewPost;
