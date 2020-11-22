/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.DAO;

import exercicioCrud.Seeders.ProdutoSeed;
import exercicioCrud.Migration.ProdutoMigration;
import exercicioCrud.Model.Produto;
import java.sql.SQLException;

/**
 *
 * @author Frede
 */
public class ProdutoDAO extends MasterDAO{
    private Produto produto;
    
    public ProdutoDAO(){
        this.produto = new Produto();
        this.model = produto;
    }
    public ProdutoDAO(Produto produto){
        this.produto = produto;
        this.model = produto;
    }
    
    @Override
    protected void prepQuery() {
        this.sqlconsulta = "SELECT * FROM "+ produto;
        this.sqlinserir = "INSERT INTO "+produto+" (nome, unidade_medida, descricao) VALUES( ?, ?, ?);";
        this.sqlalterar = "UPDATE "+produto+" SET nome = ?, unidade_medida = ?, descricao = ? WHERE id = "+ produto.getId()+";";
        this.sqlexcluir = "DELETE FROM "+produto+" WHERE id = ?;";
    }
    
    @Override
    protected void prepStatSet() throws SQLException {
        this.prepStat.setString(1, this.produto.getNome());
        this.prepStat.setString(2, this.produto.getUnidade_medida());
        this.prepStat.setString(3, this.produto.getDescricao());
    }

    @Override
    public void createTable() {
        ProdutoMigration.create();
    }

    @Override
    public void dropTable() {
        ProdutoMigration.drop();
    }

    @Override
    public void sow() {
        ProdutoSeed.sow();
    }




    
}
