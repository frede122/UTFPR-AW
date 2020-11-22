/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Seeders;

import exercicioCrud.DAO.ClienteDAO;
import exercicioCrud.DAO.ProdutoDAO;

/**
 *
 * @author Frede
 */
public class ClienteSeed {
    private static String sql = "INSERT INTO cliente (nome, cpf, endereco, email) "
            + "VALUES "
            + "('Cooperativa A', '12121212', 'Rua principal', 'email@coop.com.br'), "
            + "('Granja X', '3334445', 'Zona rural', 'email@granja.com'), "
            + "('Cooperativa B', '777777', 'Rua principal ao lado da rodovia', 'email@cooperativa.com.br');";
    
    public static void sow(){
        ClienteDAO cDAO = new ClienteDAO();
        cDAO.update(sql);
    }
}
