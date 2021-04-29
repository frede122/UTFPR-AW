import React from 'react';
import './login.css';
import { Link, Redirect} from 'react-router-dom';
import ImgLogin from '../../img/icon/login.svg';

function Login(){
    return(
        <>
            <main id="menu-login">
                <div id="login">
                    <img className="icon" src={ImgLogin} />
                    <form action="index.html">
                        <div className="form-group">
                            <label className="text-success" for="exampleInputEmail1">Usuario</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</small>
                        </div>
                        <div className="form-group">
                            <label  className="text-success" for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="button-login">
                            <Link to="home"><button type="submit" className="btn btn-success">Entrar</button></Link>
                            <button type="submit" className="btn btn-success">Cadastrar</button>
                        </div>

                    </form>
                    <Link  className="" to="/home" className="color-success">Esqueci minha senha!</Link>
                </div>
            </main>
        </>    
    );
}

export default Login;