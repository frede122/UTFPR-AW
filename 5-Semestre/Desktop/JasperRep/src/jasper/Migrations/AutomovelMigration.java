/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jasper.Migrations;

import jasper.Conn.BD;
import jasper.Seeders.ModeloSeed;

/**
 *
 * @author Frede
 */
public class AutomovelMigration {
    private static BD bd = new BD();
    private static String nome = "automovel";
   
    
    public static void create(){
        if(!bd.TableExist(nome)){
            String sql = "CREATE TABLE "+nome+" ("
                    + "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, "
                    + "modelo VARCHAR(50), "
                    + "fabricante INT(6), "
                    + "gasolina_efici FLOAT, "
                    + "alcool_efici FLOAT, "
                    + "diesel_efici FLOAT"
                    + ");";
            System.out.println("SQL: "+sql);
            bd.ExecutaUpdate(sql);
            ModeloSeed.inserirAutomovel();
        }
    }
}
