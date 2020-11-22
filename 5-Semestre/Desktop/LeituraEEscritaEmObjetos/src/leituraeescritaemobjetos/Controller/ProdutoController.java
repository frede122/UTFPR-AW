package leituraeescritaemobjetos.Controller;

import leituraeescritaemobjetos.Model.Produto;
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
public class ProdutoController extends MasterController<Produto>{
    
    private Produto produto = new Produto();
    private static ArrayList<Produto> produtos = new ArrayList<>();

    public ProdutoController(){
        super("produtos.dat");
        this.listItem = produtos;   
        this.item = produto;
    }
    
    public void retornarTodosProduto() { 
        produtos = this.retornarTudo(); 
    }
       
    //Getters e Setters
     
    public static ArrayList<Produto> getProdutos(){
        return produtos;
    }

    public Produto getProduto() {
        return produto;
    }

    
    public void setProduto(Produto produto) {
        this.produto = produto;
    }
    
}