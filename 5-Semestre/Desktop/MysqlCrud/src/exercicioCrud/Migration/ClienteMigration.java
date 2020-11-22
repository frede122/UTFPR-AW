/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Migration;

import exercicioCrud.DAO.ClienteDAO;
import exercicioCrud.DAO.MasterDAO;

/**
 *
 * @author Frede
 */
public class ClienteMigration {
    
    
    private static String nome = "cliente";
    private static ClienteDAO dao = new ClienteDAO();
    
    public static void create(){
        String sql = "CREATE TABLE "+nome+" ("
                + "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, "
                + "nome VARCHAR(50), "
                + "cpf VARCHAR(50), "
                + "endereco VARCHAR(100), "
                + "email VARCHAR(50)"
                + ");";
        System.out.println("SQL: "+sql);
        dao.update(sql);
        
    }
    
    public static void drop(){
        String sql = "DROP TABLE "+nome+";";
        System.out.println("SQL: "+sql);
        dao.update(sql);
        
    }
}
