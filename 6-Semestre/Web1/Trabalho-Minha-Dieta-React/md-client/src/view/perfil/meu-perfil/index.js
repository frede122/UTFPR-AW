import React from 'react'; 
import { Link } from 'react-router-dom';
import NavBar from '../../../component/navbar';
import './meu-perfil.css';

function MeuPerfil() {
    return(
        <>
            <NavBar active="meuperfil" />
            <main id="cad-perfil" className="main p-lg-5 p-md-3 p-sm-1 row m-0">
                <div className="container d-block">
                    <h1>Frederson Mandu de Oliveira <Link to=""><i class="fas fa-edit"></i></Link></h1>
                    <hr class="separator solid " />
                    <span className="d-block"><strong className="text-success">Data Nascimento: </strong >06/05/1991<strong className="text-success">   Idade: </strong> 30 anos<Link to=""><i class="fas fa-edit"></i></Link></span>
                    
                    <span className="d-block">
                        <strong className="text-success">Sexo: </strong >Masculino 
                        <Link to=""><i class="fas fa-edit"></i></Link>
                    </span>
                    <span className="d-block">
                        <strong className="text-success">E-mail: </strong >meuemail@email.com 
                        <Link to=""><i class="fas fa-edit"></i></Link>
                    </span>
                    <span className="d-block">
                        <strong className="text-success">Endereço: </strong >Faz. Arizona, Ibaiti - PR - 
                        <strong className="text-success"> nº </strong>000
                        <Link to=""><i class="fas fa-edit"></i></Link>
                    </span>
                </div>
            </main>
        </>
    );
}

export default MeuPerfil;