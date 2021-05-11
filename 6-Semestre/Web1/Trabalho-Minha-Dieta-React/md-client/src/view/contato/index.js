import React, { useState } from 'react';
import NavBar from '../../component/navbar';
import './contato.css';

function Contato(){
    const [alertAdd, setAlertAdd] = useState(false);
    return(
        <>
        <NavBar active="contato"/>
            
            <main id="contato" className="cadastro main p-lg-5 p-md-3 p-sm-1 m-0">
                <div class="container col-lg-4 col-md-8 col-sm-12 row">
                    <h3 className="text-success mb-3 text-center">Contato</h3>

                    <span><strong className="text-success">Email: </strong> frede@frede.com</span>
                    <span><strong className="text-success">Telefone: </strong> (43) 35462233</span>
                    <span><strong className="text-success">Whatsapp: </strong> (43) 999884455</span>
                </div>
            </main> 
        </>
    );
}

export default Contato;