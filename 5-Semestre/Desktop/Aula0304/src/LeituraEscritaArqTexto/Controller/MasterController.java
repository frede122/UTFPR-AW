/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package LeituraEscritaArqTexto.Controller;

import LeituraEscritaArqTexto.Model.Model;
import LeituraEscritaArqTexto.Model.Produto;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.ArrayList;

/**
 *
 * @author Frede
 * @param <t>
 */
public class MasterController<t extends Model> {
    protected File f;
    protected ArrayList<t> listItem;
    protected t item;

    public MasterController(String vlr) {
        try {
            File dir = new File(System.getProperty("user.home") + "//banco");
            if(!dir.exists())
                dir.mkdir();

            f = new File(dir, vlr);
            if(!f.exists()){
                f.createNewFile();
            }
        }catch( Exception e){
            e.printStackTrace();
        }
    }
    
    public int encontrarIndex(int id){
        for(t cli : listItem){
            if(cli.getId() == id){
                return listItem.indexOf(cli);
            }
        }
        return 0;
    }
    
    public void adicionarItem(){
        int id = 0;
        //Verfica se a ultima posição não é nula
        if(listItem.size() > 0 && listItem.get(listItem.size() - 1) != null)
            id = listItem.get(listItem.size() - 1).getId() + 1;
            // Retorna o objeto da ultima posição do arraylist e retorna o id, acrescentando + 1 para proximo indice
        item.setId(id);
        listItem.add(item);
    } 
    
    public t retornarItem(int id){
         for(t item : listItem){
            if(item.getId() == id){
                System.out.println(item.getId());
                return item;
            }
        }
         return null;
    }
    
    public void removerItem(int id){
        int index = this.encontrarIndex(id);
        listItem.remove(index);
    }
    
    public void atualizarItem(){
        int index = this.encontrarIndex(item.getId());
        listItem.set(index, item);
    }
}
