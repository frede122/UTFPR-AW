/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Migration;

import exercicioCrud.DAO.ClienteDAO;
import exercicioCrud.DAO.ProdutoDAO;

/**
 *
 * @author Frede
 */
public class ProdutoMigration {
    
    
    private static String nome = "produto";
    private static ProdutoDAO dao = new ProdutoDAO();
            
    
    public static void create(){
        String sql = "CREATE TABLE "+nome+" ("
                + "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, "
                + "nome VARCHAR(50), "
                + "unidade_medida VARCHAR(50), "
                + "descricao VARCHAR(100)"
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
