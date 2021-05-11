import { BrowserRouter as Router, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import React from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from '../src/store';
import PrivateRoute from "./component/rotas-privadas";
import { PersistGate } from "redux-persist/integration/react";

/* Pages */
import Login from './view/login';
import Home from "./view/home";
import Usuario from "./view/usuario";
import CadastrarUsuario from "./view/usuario/cadastrar-usuario";
import MeuPerfil from "./view/usuario/meu-perfil";
import Alimentos from "./view/alimentos";
import CadastrarAlimentos from "./view/alimentos/cadastrar-alimentos";
import Cardapio from "./view/cardapio";
import CadastrarCardapio from "./view/cardapio/cadastrar-cardapio";
import Relatorio from "./view/relatorio";
import Contato from "./view/contato";
import LostPassword from './view/lostpassword';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Login} />
          <Route exact path='/lost-password' component={LostPassword} />

          <PrivateRoute exact path='/home' component={Home} usuarioTipo={0} componentRedirect={Login}/>

          <PrivateRoute exact path='/meu-perfil' component={ MeuPerfil } usuarioTipo={0} componentRedirect={Login} /> 
          <PrivateRoute exact path='/lista-usuarios' component={ Usuario} componentRedirect={Login} />
          <PrivateRoute exact path='/cadastrar-usuario' component={CadastrarUsuario} componentRedirect={Login} />

          <PrivateRoute exact path='/alimentos' component={ Alimentos } usuarioTipo={0} componentRedirect={Login} />
          <PrivateRoute exact path='/cadastrar-alimentos' component={ CadastrarAlimentos } componentRedirect={Login}/>
          

          <PrivateRoute exact path='/cadastrar-cardapio' component={ CadastrarCardapio} componentRedirect={Login} />
          <PrivateRoute exact path='/cardapios' component={ Cardapio }  usuarioTipo={0} componentRedirect={Login} />

          <PrivateRoute exact path='/relatorio' component={ Relatorio } componentRedirect={Login}/>

          <PrivateRoute path='/contato' component={ Contato}  usuarioTipo={0} componentRedirect={Login} />
  
            {/* Graças ao Redirect em Login, quando nivel de usuario for menor ele não acessa a rota privada mas é redirecionado pra login, e de novo para home se estiver logado */}
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
