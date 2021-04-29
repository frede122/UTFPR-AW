import React from 'react';
import './navbar.css';
import { Link, Redirect} from 'react-router-dom';

function NavBar({active = 'inicio'}){
    return (

        <nav id="nav-primary" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="home">M.D</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={ active === "inicio" ? "nav-link active" : 'nav-link'} aria-current="page" to="home">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={ active === "meuperfil" ? "nav-link active" : 'nav-link'} to="meu-perfil">Meu Perfil</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={ active === "pacientes" ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}  to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Paciente
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="cadastrar-usuario">Cadastrar</Link></li>
                                <li><Link className="dropdown-item" to="lista-usuarios">Ver / Editar</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={ active === "alimentos" ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}  to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Alimentos
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="cadastrar-bebidas">Cadastrar Bebidas</Link></li>
                                <li><Link className="dropdown-item" to="cadastrar-solidos">Cadastrar Alimentos Solidos</Link></li>
                                <li><Link className="dropdown-item" to="alimentos">Ver / Editar</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={ active === "cardapio" ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}  to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cardapio
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="cadastrar-cardapio">Cadastrar</Link></li>
                                <li><Link className="dropdown-item" to="cardapios">Ver / Editar</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={ active === "relatorio" ? "nav-link active" : "nav-link"} aria-current="page" to="relatorio">Relatorio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link-danger active nav-link" aria-current="page" to="login">Sair</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;