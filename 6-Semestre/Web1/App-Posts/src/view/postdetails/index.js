import React, { useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import firebase from '../../config/firebase';
import {useSelector} from 'react-redux';
import './postdetails.css';
import Navbar from '../../components/navbar';

function PostDetails({match}) {
    
    const [post, setPost] = useState();
    const [categoria, setCategoria] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [descricao, setDescricao] = useState();
    const [urlImage, setUrlImage] = useState();
    const [titulo, setTitulo] = useState();
    const [usuario, setUsuario] = useState();
    const [visualizacoes, setVisualizacoes] = useState(1);
    const [excluido, setExcluido] = useState(0);
    
    const [carregando, SetCarregando] = useState(1);
    const usuarioLogado = useSelector( state => state.usuarioEmail)


    useEffect( () => {
        firebase.firestore().collection('posts').doc(match.params.idPost).get().then( resultado =>{
           
            setCategoria(resultado.data().categoria);
            setData(resultado.data().data);
            setHora(resultado.data().hora);
            setDescricao(resultado.data().descricao);
            setTitulo(resultado.data().titulo);
            setUsuario(resultado.data().usuario);
            setVisualizacoes(resultado.data().visualizacoes);

            firebase.firestore().collection('posts').doc(match.params.idPost).update('visualizacoes', resultado.data().visualizacoes + 1);
            
            firebase.storage().ref(`imagens/${resultado.data().imagem}`).getDownloadURL().then( url =>{
                // alert(url)
                setUrlImage(url);
                SetCarregando(0);
            })
        }) 
    }, []);

    function remover(){
        firebase.firestore().collection('posts').doc(match.params.idPost).delete().then( ()=> {
            setExcluido(1);
        });
    }

    return(
        

        <>
        
            <Navbar />
                        
            { excluido ? <Redirect to="/" /> : null}

            <div className="container-fluid">
                {
                    carregando ? <div className="row mt-5"><div className="mx-auto spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div> </div> 
                    :
                    <div>
                        <div className="row">
                            <img src={urlImage} className="img-banner p-0" alt="Banner" />
                            <div className="col-12 text-end mt-2 visualizacoes">
                                <i className="fas fa-eye"></i><span>  {visualizacoes + 1}</span>
                            </div>
                            <h3 className="max-auto mt-5 text-center titulo">{titulo}</h3>
                        </div>

                        <div className="row mt-5 d-flex justify-content-around">
                            <div className="col-md-3 col-sm-12 p-3 my-1 box-info">
                                <i className="fas fa-ticket-alt fa-2x mb-2"></i>
                                <h5><strong>Categoria</strong></h5>
                                <span className="mt-3">{categoria}</span>

                            </div>

                            <div className="col-md-3 col-sm-12 p-3 my-1 box-info">
                                <i className="fas fa-calendar-alt fa-2x mb-2"></i>
                                <h5><strong>Data</strong></h5>
                                <span className="mt-3">{data}</span>

                            </div>

                            <div className="col-md-3 col-sm-12 p-3 my-1 box-info">
                                <i className="fas fa-clock fa-2x mb-2"></i>
                                <h5><strong>Hora</strong></h5>
                                <span className="mt-3">{hora}</span>

                            </div>
                        </div>

                        <div className="row box-detlahes">
                            <div className="col-12 text-center">
                                <h5><strong>Descrição</strong></h5>
                            </div>
                            <div className="col-12 text-center">
                                <p>{descricao}</p>
                            </div>
                            
                        </div>
                        {
                            usuarioLogado === usuario ?
                            <>
                                <Link to={`/postedit/${match.params.idPost}`} className="btn-editar"><i className="fas fa-3x fa-pen-square"></i></Link>
                                <div className="row p-3">
                                    <button onClick={remover} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Remover Post</button>
                                </div>
                            </>
                            : null
                        }

                    </div>
                }
            </div>

        </>
    );

    
}

export default PostDetails;