/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Controller;

import exercicioCrud.DAO.ClienteDAO;
import exercicioCrud.Model.Cliente;

/**
 *
 * @author Frede
 */
public class ClienteController extends MasterController<ClienteDAO>{
    private Cliente cliente;
    private ClienteDAO clienteDAO;
    
    public ClienteController(){
        
        this.cliente = new Cliente();
//        this.model = this.cliente;
        
        this.clienteDAO = new ClienteDAO(cliente);
        this.dao = this.clienteDAO;
        
    }


    public Cliente getCliente() {
        return cliente;
    }
    
    public void setCliente(Cliente cliente){
        this.cliente = cliente;
    }
    
}
