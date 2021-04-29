import React from 'react';
import './postcard.css';
import imgCafe from '../../img/background/bebidas.png'

function Postcard() {
    return(

            <div className=" mb-3 col-lg-4 col-md-6 col-sm-12 list-diet">
              <div className="card card-body">
                
                <img src={imgCafe} />
                <h5 className="card-title">Cafe da Manha</h5>
                <h6 className="list-item card-subtitle mb-2 text-muted">8:00</h6>
                
                


                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ver
                </button>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>



              </div>
            </div>
    );
}

export default Postcard;