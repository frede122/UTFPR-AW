import React from 'react';
import './navbar.css';

import { Link, Redirect} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

function NavBar({active = 'inicio'}){
    const dispatch = useDispatch();
    return (

        <nav id="nav-primary" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="home">M.D <span className="text-success text-small">{useSelector(state => state.usuarioId)}</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={ active === "inicio" ? "nav-link active" : 'nav-link'} aria-current="page" to="/home">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={ active === "meuperfil" ? "nav-link active" : 'nav-link'} to="meu-perfil">Meu Perfil</Link>
                        </li>
                        { useSelector(state => state.usuarioTipo) > 0 ?
                        <>
                            <li className="nav-item dropdown">
                                <Link className={ active === "pacientes" ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}  to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Paciente
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/cadastrar-usuario">Cadastrar</Link></li>
                                    <li><Link className="dropdown-item" to="/lista-usuarios">Ver / Editar</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={ active === "alimentos" ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}  to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Alimentos
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/cadastrar-alimentos">Cadastrar</Link></li>
                                    <li><Link className="dropdown-item" to="/alimentos">Ver / Editar</Link></li>
                                </ul>
                            </li>
                        
                            <li className="nav-item dropdown">
                                <Link className={ active === "cardapio" ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}  to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cardapio
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/cadastrar-cardapio">Cadastrar</Link></li>
                                    <li><Link className="dropdown-item" to="/cardapios">Ver / Editar</Link></li>
                                </ul>
                            </li>
                        </>:
                            <li className="nav-item">
                                <Link className={ active === "cardapio" ? "nav-link active" : "nav-link"} aria-current="page" to="/cardapios">Cardapio</Link>
                            </li>
                        }
                        
                        <li className="nav-item">
                            <Link className={ active === "contato" ? "nav-link active" : "nav-link"} aria-current="page" to="/contato">Contato</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link-danger active nav-link" aria-current="page" onClick={() => dispatch({ type: 'LOGOUT'})} >Sair</Link>
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