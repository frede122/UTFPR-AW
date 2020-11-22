/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Controller;

import exercicioCrud.DAO.ClienteDAO;
import exercicioCrud.DAO.VendasDAO;
import exercicioCrud.Model.Cliente;
import exercicioCrud.Model.Vendas;

/**
 *
 * @author Frede
 */
public class VendasController extends MasterController<VendasDAO>{
    private Vendas vendas;
    private VendasDAO vendasDAO;
    
    public VendasController(){
        
        this.vendas = new Vendas();

        
        this.vendasDAO = new VendasDAO(vendas);
        this.dao = this.vendasDAO;
        
    }


    public Vendas getVendas() {
        return vendas;
    }
    
    public void setVendas(Vendas vendas){
        this.vendas = vendas;
    }
    
}
