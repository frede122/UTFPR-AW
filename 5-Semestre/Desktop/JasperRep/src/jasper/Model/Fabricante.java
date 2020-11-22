/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jasper.Model;

/**
 *
 * @author Frede
 */
public class Fabricante extends Model {
    private String [] FILABLE = {
        "id",
        "nome"
    };

    public Fabricante(){
        this.filable = FILABLE;
    }
            
    
    
    
    //Getter e Setters
    public String getNome() {
        return nome;
    }


    public void setNome(String nome) {
        this.nome = nome;
    }
    private String nome = "";
}
