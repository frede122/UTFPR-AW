
package LeituraEscritaArqTexto.Controller;

import LeituraEscritaArqTexto.Model.Cliente;
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
    private static ArrayList<Cliente> clientes = new ArrayList();
    private String separator = ";";
    

    public ClienteController(){
        super("cliente.txt");
        this.item = cliente;
        this.listItem = clientes;
    }
    


    public Cliente retornarTodosCliente() {
        try{
            clientes.clear();
            BufferedReader r = new BufferedReader(new FileReader(f));
            while(r.ready()){
                String [] valor = r.readLine().split(separator);
                if(valor.length >= 6){
                    Cliente cli = new Cliente();
                    cli.setId(Integer.parseInt( valor[0]));
                    cli.setNome(valor[1]);
                    cli.setCpf(valor[2]);
                    cli.setEndereco(valor[3]);
                    cli.setData(valor[4]);
                    cli.setEmail(valor[5]);
                    clientes.add(cli);
                }
            }
            
        }catch(FileNotFoundException e){
            e.printStackTrace();
        }catch(IOException e){
            e.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();
        }
        return getCliente();
    }
 
    public void salvar(){
        BufferedWriter file = null;
        try {
            file = new BufferedWriter(new FileWriter(f, false));        
            for (Cliente cliente : clientes){
                file.write(
                        cliente.getId() +";"+
                        cliente.getNome()+";"+
                        cliente.getCpf()+";"+
                        cliente.getEndereco()+";"+
                        cliente.getData()+";"+
                        cliente.getEmail()
                );
                file.newLine();
//                file.flush();
            }
            file.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
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
