/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Seeders;

import exercicioCrud.DAO.ProdutoDAO;

/**
 *
 * @author Frede
 */
public class ProdutoSeed {
    private static String sql = "INSERT INTO produto (nome, unidade_medida, descricao) "
            + "VALUES "
            + "('Arroz', 'kg', 'arroz branco, tamanho médio'), "
            + "('Milho', 'sacas', 'saca de 60 kg de milho '), "
            + "('Soja', 'sacas', 'saca de 60 kg de soja transgênica ');";
    
    public static void sow(){
        ProdutoDAO pDAO = new ProdutoDAO();
        pDAO.update(sql);
    }
}
