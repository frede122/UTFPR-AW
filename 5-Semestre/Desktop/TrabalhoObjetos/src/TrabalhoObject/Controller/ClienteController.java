
package TrabalhoObject.Controller;

import TrabalhoObject.Model.Cliente;
import TrabalhoObject.Model.Cliente;
import TrabalhoObject.Model.Produto;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;

/**
 *
 * @author Frede
 */
public class ClienteController extends MasterController<Cliente>{
    
    private Cliente cliente = new Cliente();
    private static ArrayList<Cliente> clientes;

    public ClienteController(String vlr) {
        super(vlr);
    }

    public ClienteController(){
        super("clientes.dat");
        this.listItem = clientes;   
        this.item = cliente;
    }
    
    public void retornarTodosClientes() { 
        clientes = this.retornarTudo(); 
    }
    
    //Getters e Setters
         
    public static ArrayList<Cliente> getClientes(){
        return clientes;
    }

    public Cliente getCliente() {
        return cliente;
    }

    
    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
    
}
