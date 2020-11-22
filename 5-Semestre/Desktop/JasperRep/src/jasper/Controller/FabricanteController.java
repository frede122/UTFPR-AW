/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jasper.Controller;

import jasper.Model.Fabricante;
import java.sql.SQLException;

/**
 *
 * @author Frede
 */
public class FabricanteController extends MasterController{

    private Fabricante fabricante = new Fabricante();
    
    public FabricanteController(){
        this.model =  fabricante;
    }

    @Override
    public void prepStatObjts() throws SQLException{
            prepStat.setString(2, fabricante.getNome());
    }
    

    // Getters e Setters
    public Fabricante getFabricante() {
        return fabricante;
    }
    
}
