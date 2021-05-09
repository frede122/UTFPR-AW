import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import IsLogado from '../../auth';



function PrivateRoute({path, component, usuarioTipo= 1, componentRedirect = null}){
    
    return(
       
        <Route exact 
            path={path} 
            component={  
                IsLogado(usuarioTipo) ? component : componentRedirect 
            } 
        /> 
        
    );
}

export default PrivateRoute;