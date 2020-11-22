/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package leituraeescritaemobjetos.Controller;

import leituraeescritaemobjetos.Model.Fornecedor;
import leituraeescritaemobjetos.Model.Fornecedor;
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
    private static ArrayList<Fornecedor> fornecedores;



    public FornecedorController(){
        super("fornecedores.dat");
        this.listItem = fornecedores;   
        this.item = fornecedor;                
    }
    
    public void retornarTodosFornecedores() { 
        fornecedores = this.retornarTudo(); 
    }
    
    //Getters e Setters
         
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
