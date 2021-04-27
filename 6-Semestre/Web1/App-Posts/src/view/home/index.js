import React,  {useEffect, useState} from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar';
import PostCard from '../../components/postcard';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';


function Home({match}){

    const [posts, setPosts] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    var listaPosts = [];

    useEffect( () => {

        if(match.params.parametro){

            firebase.firestore().collection('posts').where('usuario', '==', usuarioEmail).get().then(async (resultado)=> {
            
                await resultado.docs.forEach( doc => {
                    if(doc.data().titulo.indexOf(pesquisa) >= 0) {
                        listaPosts.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                })
                
                setPosts(listaPosts);
    
            })

        }else{

            firebase.firestore().collection('posts').get().then(async (resultado)=> {
            
                await resultado.docs.forEach( doc => {
                    if(doc.data().titulo.indexOf(pesquisa) >= 0) {
                        listaPosts.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                })
                
                setPosts(listaPosts);
    
            })
        }


    });

    return(
        <>
            <Navbar />

            <div className="row m-3">
                <input type="text" onChange={ (e) => {setPesquisa(e.target.value)}} className="form-control text-center" placeholder="Pesquisar posts"/>
            </div>

            <div className="row p-3">
                {
                    posts.map( item => <PostCard id={item.id} titulo={item.titulo} descricao={item.descricao} visualizacoes={item.visualizacoes} imagem={item.imagem}/> )
                }
            </div>
        </>
    )
}

export default Home;

