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
public class Automovel extends Model{

    /**
     * @return the gasolina
     */
    

    private String modelo = "";
    private Fabricante fabricante = new Fabricante();
    private float gasolina_efici = 0;
    private float alcool_efici = 0;
    private float diesel_efici = 0;
    
    private String [] FILABLE = {
        "id",
        "modelo", 
        "fabricante", 
        "gasolina_efici", 
        "alcool_efici", 
        "diesel_efici"
    };
    
    public Automovel(){
        this.filable = FILABLE;
    }
    

    
    
    
    
    //Getters e Setters

    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public Fabricante getFabricante() {
        return fabricante;
    }
    public void setFabricante(Fabricante fabricante) {
        this.fabricante = fabricante;
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

    public String[] getFILABLE() {
        return FILABLE;
    }

    public void setFILABLE(String[] FILABLE) {
        this.FILABLE = FILABLE;
    }

}
