/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernateveiculo.Controller;
import hibernateveiculo.DAO.MasterDAO;
import hibernateveiculo.Model.Model;
import java.util.ArrayList;
/**
 *
 * @author Frede
 */
public abstract class MasterController <da extends MasterDAO, mod extends Model > {

    protected da dao;
    protected mod model; 
    
    public mod getModel() {
        return model;
    }

    /**
     * @param model the model to set
     */
    public void setModel(mod model) {
        this.model = model;
    }

    
    public MasterController(){
    }
    
    public ArrayList returnAll(){
        return dao.returnAll();
    }
    
    public void update(){
        dao.update(getModel());
    }
    public void inserir(){
        dao.inserir(getModel());
    }
    
    public void delete(Long id){
        
        dao.delete(returnSearch(id));

    }
    
    public mod returnSearch(Long id){
        return (mod) dao.procura(id);
    }
    
}
