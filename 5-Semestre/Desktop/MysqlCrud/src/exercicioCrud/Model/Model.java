/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Model;

/**
 *
 * @author Frede
 */
public class Model {
    protected String [] filable = {"id"};
    private int id = 0;
    
    @Override
    public String toString(){
        return this.getClass().getSimpleName().toLowerCase();
    }
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String[] getFilable() {
        return filable;
    }


}
