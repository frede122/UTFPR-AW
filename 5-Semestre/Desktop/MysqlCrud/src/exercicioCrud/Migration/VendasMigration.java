/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Migration;

import exercicioCrud.DAO.ProdutoDAO;

/**
 *
 * @author Frede
 */
public class VendasMigration {
    
    
    private static String nome = "vendas";
    private static ProdutoDAO dao = new ProdutoDAO();
            
    
    public static void create(){
        String sql = "CREATE TABLE "+nome+" ("
                + "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, "
                + "id_cliente INT(6), "
                + "id_produto INT(6), "
                + "quantidade INT, "
                + "preco FLOAT, "
                + "total FLOAT"
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
