import React from 'react';
import './postcard.css';
import imgCafe from '../../img/background/bebidas.png'

function Postcard() {
    return(

            <div className=" mb-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 list-diet">
              <img class="card-img-top" src={imgCafe} />
              <div className="card card-body">
                
                <h5 className="card-title">Cafe da Manha</h5>
                <h6 className="list-item card-subtitle mb-2 text-muted">8:00</h6>

                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ver
                </button>


                <div class="modal modal-home fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header" style={{background:  `url("${imgCafe}")`}}>
                            
                            <h3 class="modal-title" id="exampleModalLabel">Café da Manhã</h3>
                            <p>Segunda feira, 22 março de 2021</p>
                            <span>8:00</span>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h5>Descrição:</h5>
                            <p>

                            </p>
                            <h5>Itens:</h5>
                            <ul>
                                <li> item 1</li>
                                <li> item 2</li>
                                <li> item 3</li>
                            </ul>
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