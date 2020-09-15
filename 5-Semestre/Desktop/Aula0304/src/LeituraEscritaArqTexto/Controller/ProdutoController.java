package LeituraEscritaArqTexto.Controller;

import LeituraEscritaArqTexto.Model.Produto;
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
    private static ArrayList<Produto> produtos = new ArrayList();
    private String separator = ";";

    
    public ProdutoController(){
        super("produto.txt");
        this.listItem = produtos;
        this.item = produto;
                        
    }
    


    public Produto retornarTodosProduto() {
        try{
            //produtos.clear();
            produtos.clear();
            BufferedReader r = new BufferedReader(new FileReader(f));
            while(r.ready()){
                String [] valor = r.readLine().split(separator);
                if(valor.length >= 4){
                    Produto cli = new Produto();
                    cli.setId(Integer.parseInt( valor[0]));
                    cli.setNome(valor[1]);
                    cli.setCategoria(valor[2]);
                    cli.setUnidadeMedida(valor[3]);
                    produtos.add(cli);
                }
            }
            
        }catch(FileNotFoundException e){
            e.printStackTrace();
        }catch(IOException e){
            e.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();
        }
        return getProduto();
    }


    public void salvar(){
        BufferedWriter file = null;
        try {
            file = new BufferedWriter(new FileWriter(f, false));        
            for (Produto produto : produtos){
                file.write(
                        produto.getId() +";"+
                        produto.getNome()+";"+
                        produto.getCategoria()+";"+
                        produto.getUnidadeMedida()
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