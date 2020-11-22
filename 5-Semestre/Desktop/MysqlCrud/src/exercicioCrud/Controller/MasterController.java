/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Controller;
import exercicioCrud.DAO.MasterDAO;
import java.sql.ResultSet;
/**
 *
 * @author Frede
 */
public abstract class MasterController <td extends MasterDAO > {
    protected td dao;
    public MasterController(){
    }
    
    public ResultSet returnAll(){
        return dao.returnAll();
    }
    
    public void update(){
        dao.update();
    }
    public void inserir(){
        dao.inserir();
    }
    
    public void excluir(int id){
        dao.delete(id);
    }
    
    public void createTable(){
        if(!dao.tableExist()){
            dao.createTable();
            System.out.println("Tabela "+ dao.getModel() +" criada com sucesso!");
            dao.sow();
            System.out.println("Tabela "+ dao.getModel() +" semeada com sucesso!");
        }else{
            System.out.println("Tabela "+ dao.getModel() +" ja existe!");
        }
    }
    
    public void dropTable(){
        if(dao.tableExist()){
            dao.dropTable();
            System.out.println("Tabela "+ dao.getModel() +" apagada com sucesso!");
        }else{
            System.out.println("Tabela "+ dao.getModel() +" não existe!");
        }
    }
    
//    protected void sowTable(){;
//        dao.sow();
//    }
}
