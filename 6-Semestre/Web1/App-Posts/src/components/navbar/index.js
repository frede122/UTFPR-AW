import React, {useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

function Navbar(){
    const dispatch = useDispatch();
    return(
      <nav className="navbar navbar-expand-lg mb-4 ">
        <div className="container-fluid">
          <Link to="/home"><i className="fas fa-book-open fa-2x "></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ml-5 mb-lg-0">
              {
                useSelector(state => state.usuarioLogado) > 0 ?
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/posts/meus">Meus Posts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/newpost">Publicar Posts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={() => dispatch({ type: 'LOGOUT'})}>Sair</Link>
                </li>
              </> 
              : 
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/newuser">Cadastrar</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Login</Link>
                </li>

              </>
              }


            </ul>
          </div>
        </div>
      </nav>
  
    );
}

export default Navbar;