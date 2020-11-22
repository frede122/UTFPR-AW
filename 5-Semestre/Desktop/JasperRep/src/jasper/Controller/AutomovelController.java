/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jasper.Controller;

import jasper.Model.Automovel;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Frede
 */
public class AutomovelController extends MasterController{

    private Automovel automovel = new Automovel();
    
    public AutomovelController(){
        this.model =  automovel;
    }
    
    @Override
    public ResultSet returnAll(){
        String var1 = automovel.toString();
        String var2 = automovel.getFabricante().toString();
        String query = "SELECT "
                + "a.id, "
                + "a.modelo, "
                + "a.fabricante AS id_fabricante, "
                + "a.gasolina_efici AS 'Gasolina Eficiencia', "
                + "a.alcool_efici AS 'Alcool Eficiencia', "
                + "a.diesel_efici AS 'Diesel Eficiencia', "
                + "f.nome AS fabricante"
                + " FROM "
                + var1 +" AS a, "
                + var2 +" AS f"
                +" WHERE a.fabricante = f.id;";
        System.out.println(query);
        return bd.ExecutaQuery(query);
    }

    @Override
    public void prepStatObjts() throws SQLException{
            prepStat.setString(2, automovel.getModelo());
            prepStat.setInt(3, automovel.getFabricante().getId());
            prepStat.setFloat(4, automovel.getGasolina_efici());
            prepStat.setFloat(5, automovel.getAlcool_efici());
            prepStat.setFloat(6, automovel.getDiesel_efici());
    }
    

    // Getters e Setters
    public Automovel getAutomovel() {
        return automovel;
    }
    
}
