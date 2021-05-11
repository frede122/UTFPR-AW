import React, { useEffect, useState } from 'react';
import './postcard.css';
import firebase from '../../config/firebase';
import imgCafe from '../../img/background/bebidas.png'


function Postcard({img, titulo, hora, data, descricao , alimentos, id}) {


    const [ urlImagem, setUrlImagem] = useState();

    const [ dataL, setDataL] = useState(new Date().setDate(data));

    const datalo = new Date(data).toLocaleDateString()

    useEffect(()=>{
        firebase.storage().ref(`/imagens/cardapios/${img}`).getDownloadURL().then( url =>{
            setUrlImagem(url);
        })
    })

    return(

            <div className=" mb-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 list-diet">
              <img class="card-img-top" src={urlImagem} />
              <div className="card card-body">
                
                <h5 className="card-title">{titulo}</h5>
                <h6 className="list-item card-subtitle mb-2 text-muted">{datalo} - {hora}</h6>

                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target={`#${id}`}>
                    Ver
                </button>


                <div class="modal modal-home fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header" style={{background:  `url("${urlImagem}")`}}>
                            
                            <h3 class="modal-title" id="exampleModalLabel">{titulo}</h3>
                            <p>{datalo}</p>
                            <span>{hora}</span>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h5>Descrição:</h5>
                            <p>

                            </p>
                            <h5>Itens:</h5>
                            <span>
                                {alimentos}

                            </span>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-align-center btn-success" data-bs-dismiss="modal">Fechar</button>
                        </div>
                        </div>
                    </div>
                </div>



              </div>
            </div>
    );
}

export default Postcard;