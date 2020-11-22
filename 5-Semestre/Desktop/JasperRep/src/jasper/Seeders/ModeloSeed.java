/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jasper.Seeders;

import jasper.Conn.BD;

/**
 *
 * @author Frede
 */
public class ModeloSeed {
    public static void inserirFabricante(){
         BD bd = new BD();
         String nome = "fabricante";
        String sql = "INSERT INTO "+nome+" (id, nome ) VALUES (1, 'Nissan');";
        System.out.println("SQL: "+sql);
        bd.ExecutaUpdate(sql);
        sql = "INSERT INTO "+nome+" (id, nome ) VALUES (2, 'Renault');";
        System.out.println("SQL: "+sql);
        bd.ExecutaUpdate(sql);
        sql = "INSERT INTO "+nome+" (id, nome ) VALUES (3, 'Ford');";
        System.out.println("SQL: "+sql);
        bd.ExecutaUpdate(sql);
        
    }
    public static void inserirAutomovel(){
        BD bd = new BD();
        String nome = "automovel";
        String sql = "INSERT INTO "+nome+" (id, modelo, fabricante, gasolina_efici, alcool_efici, diesel_efici ) "
                + "VALUES (1, 'Frontier', 1, 8, 7.1, 4.8);";
        System.out.println("SQL: "+sql);
        bd.ExecutaUpdate(sql);
        sql = "INSERT INTO "+nome+" (id, modelo, fabricante, gasolina_efici, alcool_efici, diesel_efici ) "
                + "VALUES (2, 'March', 1, 10, 7.5, 0);";
        System.out.println("SQL: "+sql);
        bd.ExecutaUpdate(sql);
        
        
        
        sql = "INSERT INTO "+nome+" (id, modelo, fabricante, gasolina_efici, alcool_efici, diesel_efici ) "
                + "VALUES (3, 'Sandero', 2, 9, 8.5, 0);";
        System.out.println("SQL: "+sql);
        bd.ExecutaUpdate(sql);
        
        
        
        sql = "INSERT INTO "+nome+" (id, modelo, fabricante, gasolina_efici, alcool_efici, diesel_efici ) "
                + "VALUES (4, 'Ka', 3, 12, 6.5, 0);";
        System.out.println("SQL: "+sql);
        bd.ExecutaUpdate(sql);
        sql = "INSERT INTO "+nome+" (id, modelo, fabricante, gasolina_efici, alcool_efici, diesel_efici ) "
                + "VALUES (5, 'Ranger', 3, 9.2, 7.5, 8);";
        System.out.println("SQL: "+sql);
        bd.ExecutaUpdate(sql);
        sql = "INSERT INTO "+nome+" (id, modelo, fabricante, gasolina_efici, alcool_efici, diesel_efici ) "
                + "VALUES (6, 'Focus', 3, 9, 10, 0);";
        System.out.println("SQL: "+sql);
        bd.ExecutaUpdate(sql);
        sql = "INSERT INTO "+nome+" (id, modelo, fabricante, gasolina_efici, alcool_efici, diesel_efici ) "
                + "VALUES (7, 'Edge', 3, 10, 9.5, 7);";
        System.out.println("SQL: "+sql);
        bd.ExecutaUpdate(sql);
        
    }
}
