/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernateveiculo.Controller;

import hibernateveiculo.DAO.AutomovelDAO;
import hibernateveiculo.Model.Automovel;

/**
 *
 * @author Frede
 */
public class AutomovelController extends MasterController<AutomovelDAO, Automovel>{
    
    public AutomovelController(){      
        this.model = new Automovel();    
        this.dao = new AutomovelDAO();
    }


    
}
