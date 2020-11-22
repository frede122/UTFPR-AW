/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernateveiculo.DAO;

import hibernateveiculo.Model.Model;
import java.util.ArrayList;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author Frede
 */
public class MasterDAO  <td extends Model >{

    /**
     * @return the model
     */
    public td getModel() {
        return model;
    }

    /**
     * @param model the model to set
     */
    public void setModel(td model) {
        this.model = model;
    }
    protected Session session;
    protected td model;
    public void inserir(td p){
        
        Transaction tx = this.session.beginTransaction();
        this.session.save(p);
        tx.commit();
    }
    
    

    public void update(td p){
        Transaction tx = this.session.beginTransaction();
        this.session.update(p);
        tx.commit();
    }

    public void delete(td p){
        Transaction tx = this.session.beginTransaction();
        this.session.delete(p);
        tx.commit();
    }

    public ArrayList returnAll(){
        return (ArrayList) this.session.createCriteria(getModel().getClass()).list();
        
    }

    public td procura(Long id) {
        return (td) this.session.load(getModel().getClass(), id);
    }

}
