/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernateveiculo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;



/**
 *
 * @author Frede
 */
@Entity
public class Automovel extends Model{

    @Id
    @GeneratedValue
    private Long id;
    
    @Column(name= "modelo", nullable = true, length = 50)
    
    private String modelo = "";
    
    @Column(name= "fabricante",  nullable = true, length = 50)
   
    private String fabricante;
    
    @Column(name= "gasolina_efici",  nullable = true)
    private float gasolina_efici = 0;
    @Column(name= "alcool_efici",  nullable = true)
    private float alcool_efici = 0;
    @Column(name= "diesel_efici",  nullable = true)
    private float diesel_efici = 0;
    
    public Automovel(){
        
    }
    
    public Automovel( String nome, String fabricante, float gas_efi, float alcool_efi, float diesel_efi){
        this.modelo = nome;
        this.fabricante = fabricante;
        this.gasolina_efici = gas_efi;
        this.alcool_efici = alcool_efi;
        this.diesel_efici = diesel_efi;
    }
            
    
    
    //Getters e Setters

    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public float getGasolina_efici() {
        return gasolina_efici;
    }

    public void setGasolina_efici(float gasolina_efici) {
        this.gasolina_efici = gasolina_efici;
    }

    public float getAlcool_efici() {
        return alcool_efici;
    }

    public void setAlcool_efici(float alcool_efici) {
        this.alcool_efici = alcool_efici;
    }

    public float getDiesel_efici() {
        return diesel_efici;
    }

    public void setDiesel_efici(float diesel_efici) {
        this.diesel_efici = diesel_efici;
    }

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the fabricante_id
     */
    public String getFabricante() {
        return fabricante;
    }

    /**
     * @param fabricante_id the fabricante_id to set
     */
    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    
 

    
    
}
