/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package leituraeescritaemobjetos.Controller;

import leituraeescritaemobjetos.Model.Model;
import leituraeescritaemobjetos.Model.Produto;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Frede
 * @param <t>
 */
public class MasterController<t extends Model> {
    protected File f;
    protected Object o;
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
                listItem = new ArrayList<>();
                this.salvar();
            }
        }catch( Exception e){
            e.printStackTrace();
        }
        
        
    }
    
//    public int encontrarIndex(int id, ArrayList<t> l){
//        for(t cli : l){
//            if(cli.getId() == id){
//                return l.indexOf(cli);
//            }
//        }
//        return 0;
//    }
//    
        public int encontrarIndex(int id){
        for(t cli : listItem){
            if(cli.getId() == id){
                return listItem.indexOf(cli);
            }
        }
        return 0;
    }
    
//    public void adicionarItem(t item, ArrayList<t> list){
//        int id = 0;
//        //Verfica se a ultima posição não é nula
//        if(list.size() > 0 && list.get(list.size() - 1) != null)
//            id = list.get(list.size() - 1).getId() + 1;
//            // Retorna o objeto da ultima posição do arraylist e retorna o id, acrescentando + 1 para proximo indice
//        item.setId(id);
//        list.add(item);
//    }
    
    public void adicionarItem(){
        int id = 0;
        //Verfica se a ultima posição não é nula
        if(listItem.size() > 0 && listItem.get(listItem.size() - 1) != null)
            id = listItem.get(listItem.size() - 1).getId() + 1;
            // Retorna o objeto da ultima posição do arraylist e retorna o id, acrescentando + 1 para proximo indice
        item.setId(id);
        listItem.add(item);
    }  
    
    
//    public t retornarItem(int id, ArrayList<t> list){
//         for(t item : list){
//            if(item.getId() == id){
//                System.out.println(item.getId());
//                return item;
//            }
//        }
//         return null;
//    }
//    
    
    public t retornarItem(int id){
         for(t item : listItem){
            if(item.getId() == id){
                System.out.println(item.getId());
                return item;
            }
        }
         return null;
    }  
    
    public ArrayList<t> retornarTudo(){
        FileInputStream filein = null;
        ArrayList<t> aux = null;
        try {
            filein = new FileInputStream(f);
            ObjectInputStream objin = new ObjectInputStream(filein);
            aux = (ArrayList<t>) objin.readObject();
            listItem = aux;
            objin.close();
            filein.close();
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } finally {
            try {
                filein.close();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
        if(aux == null)
            return new ArrayList<t>();
        
        return aux;
        
    }
    
    
    public t retornarUm() throws FileNotFoundException, IOException, ClassNotFoundException{
        FileInputStream filein = new FileInputStream(f);
        ObjectInputStream objin = new ObjectInputStream(filein);
        t aux= (t) objin.readObject();
        objin.close();
        filein.close();
        return aux;
    }
    
    public void removerItem(int id){
        int index = this.encontrarIndex(id);
        listItem.remove(index);
    }
    
    public void atualizarItem(){
        int index = this.encontrarIndex(item.getId());
        listItem.set(index, item);
    }
    
    public void salvar(t aux){
        FileOutputStream fileout = null;
        try {
            fileout = new FileOutputStream(f);
            ObjectOutputStream objout = new ObjectOutputStream(fileout);
            objout.writeObject(aux);
            objout.flush();      
            objout.close();
            fileout.close();
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
           ex.printStackTrace();
        } finally {
            try {
                fileout.close();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }

    public void salvar(){
        FileOutputStream fileout = null;
        try {
            fileout = new FileOutputStream(f);
            ObjectOutputStream objout = new ObjectOutputStream(fileout);
            objout.writeObject(listItem);
            objout.flush();      
            objout.close();
            fileout.close();
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            try {
                fileout.close();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }
    
    
}
