import { BrowserRouter as Router, Route, useRouteMatch } from "react-router-dom";
import React from 'react';

/* Pages */
import Login from './view/login';
import Home from "./view/home";
import Perfil from "./view/perfil";
import CadastrarPerfil from "./view/perfil/cadastrar-perfil";
import MeuPerfil from "./view/perfil/meu-perfil";
import Alimentos from "./view/alimentos";
import CadastrarSolidos from "./view/alimentos/solidos/cadastrar-solidos";
import CadastrarBebidas from "./view/alimentos/bebidas/cadastrar-bebidas";
import Cardapio from "./view/cardapio";
import CadastrarCardapio from "./view/cardapio/cadastrar-cardapio";
import Relatorio from "./view/relatorio";

function App() {
  return (
    <Router>
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />

      <Route exact path='/meu-perfil' component={ MeuPerfil } />
      <Route exact path='/lista-usuarios' component={ Perfil} />
      <Route exact path='/cadastrar-usuario' component={CadastrarPerfil} />

      <Route exact path='/alimentos' component={ Alimentos } />
      <Route exact path='/cadastrar-solidos' component={ CadastrarSolidos } />
      <Route exact path='/cadastrar-bebidas' component={ CadastrarBebidas } />

      <Route exact path='/cadastrar-cardapio' component={ CadastrarCardapio } />
      <Route exact path='/cardapios' component={ Cardapio } />

      <Route exact path='/relatorio' component={ Relatorio } />

    </Router>
  );
}

export default App;
