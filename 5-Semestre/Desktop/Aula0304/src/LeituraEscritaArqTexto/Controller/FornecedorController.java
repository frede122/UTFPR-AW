/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package LeituraEscritaArqTexto.Controller;

import LeituraEscritaArqTexto.Model.Cliente;
import LeituraEscritaArqTexto.Model.Fornecedor;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

/**
 *
 * @author Frede
 */
public class FornecedorController extends MasterController<Fornecedor>{
    private Fornecedor fornecedor = new Fornecedor();
    private static ArrayList<Fornecedor> fornecedores = new ArrayList();
    private String separator = ";";
    
    
    public FornecedorController(){
        super("fornecedor.txt");
        this.listItem = fornecedores;
        this.item = fornecedor;
    }
    


    public void retornarTodosFornecedores() {
        try{
            //clientes.clear();
            fornecedores.clear();
            BufferedReader r = new BufferedReader(new FileReader(f));
            while(r.ready()){
                String [] valor = r.readLine().split(separator);
                if(valor.length >= 5){
                    Fornecedor forne = new Fornecedor();
                    forne.setId(Integer.parseInt( valor[0]));
                    forne.setNome(valor[1]);
                    forne.setcNPJ(valor[2]);
                    forne.setEndereco(valor[3]);
                    forne.setEmail(valor[4]);
                    
                    fornecedores.add(forne);
                }
            }

        }catch(FileNotFoundException e){
            e.printStackTrace();
        }catch(IOException e){
            e.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();
        }
    }
    
    public void salvar(){
        BufferedWriter file = null;
        try {
            file = new BufferedWriter(new FileWriter(f, false));        
            for (Fornecedor forne : fornecedores){
                file.write(
                        forne.getId() +";"+
                        forne.getNome()+";"+
                        forne.getcNPJ()+";"+
                        forne.getEndereco()+";"+
                        forne.getEmail()
                );
                file.newLine();
//                file.flush();
            }
            file.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(f.getPath());
    }
    
    
    public static ArrayList<Fornecedor> getForencedores(){
        return fornecedores;
    }

    public Fornecedor getFornecedor() {
        return fornecedor;
    }

    
    public void setFornecedor(Fornecedor fornecedor) {
        this.fornecedor = fornecedor;
    }

}
