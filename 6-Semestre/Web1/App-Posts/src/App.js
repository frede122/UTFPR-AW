
import React from 'react';
import { BrowserRouter as Router, Route, useRouteMatch } from "react-router-dom";
import { Provider } from 'react-redux';
import {store, persistor} from '../src/store';
import { PersistGate } from 'redux-persist/integration/react';


import Home from './view/home';
import Login from './view/login';
import NewUser from './view/newUser';
import LostPassword from './view/lostpassword';
import NewPost from './view/newpost';
import PostDetails from './view/postdetails';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path='/' component={Login}/>
          <Route exact path='/newuser' component={NewUser}/>
          <Route exact path='/home' component={Home} />
          <Route path='/posts/:parametro' component={Home} />
          <Route exact path='/lostpassword' component={LostPassword} />
          <Route exact path='/newpost' component={NewPost} />
          <Route exact path='/postdetails' component={PostDetails} />
          <Route path='/postdetails/:idPost' component={PostDetails} />
          <Route path='/postedit/:idPost' component={NewPost} />
        </Router>
      </PersistGate>
    </Provider>

  );
}

export default App;
