/*
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.DAO;

import exercicioCrud.Migration.VendasMigration;
import exercicioCrud.Model.Vendas;
import java.sql.SQLException;

/**
 *
 * @author Frede
 */
public class VendasDAO extends MasterDAO{
    private Vendas vendas;
    

    public VendasDAO(Vendas vendas){
        this.vendas = vendas;
        this.model = vendas;
    }
    
    public VendasDAO(){
        this.vendas = new Vendas();
        this.model = vendas;
    }
        
    @Override
    protected void prepQuery() {
        
//        String query = "SELECT "
//                + "a.id, "
//                + "a.modelo, "
//                + "a.fabricante AS id_fabricante, "
//                + "a.gasolina_efici AS 'Gasolina Eficiencia', "
//                + "a.alcool_efici AS 'Alcool Eficiencia', "
//                + "a.diesel_efici AS 'Diesel Eficiencia', "
//                + "f.nome AS fabricante"
//                + " FROM "
//                + var1 +" AS a, "
//                + var2 +" AS f"
//                +" WHERE a.fabricante = f.id;";
        this.sqlconsulta = "SELECT  "
                + "v.id, "
                + "v.id_cliente,"
                + "c.nome AS 'Cliente', "
                + "v.id_produto, "
                + "p.nome AS 'Produto', "
                + "v.quantidade, "
                + "v.preco, "
                + "v.total "
                + "FROM "
                + vendas + " AS v, "
                +vendas.getCliente()+" AS c, "
                +vendas.getProduto()+" AS p "
                + "WHERE v.id_cliente = c.id and v.id_produto = p.id";
        this.sqlinserir = "INSERT INTO "+vendas+" (id_cliente, id_produto, quantidade, preco, total) VALUES( ?, ?, ?, ?, ?);";
        this.sqlalterar = "UPDATE "+vendas+" SET id_cliente = ?, id_produto= ?, quantidade = ?, preco = ?, total = ? WHERE id = "+ vendas.getId()+";";
        this.sqlexcluir = "DELETE FROM "+vendas+" WHERE id = ?;";
    }
        
        
    @Override
    protected void prepStatSet() throws SQLException{            
        this.prepStat.setInt(1, this.vendas.getCliente().getId());
        this.prepStat.setInt(2, this.vendas.getProduto().getId());
        this.prepStat.setInt(3, this.vendas.getQuantidade());
        this.prepStat.setFloat(4, this.vendas.getPreco());
        this.prepStat.setFloat(5, this.vendas.getTotal());
    }

    @Override
    public void createTable() {
        VendasMigration.create();
    }

    @Override
    public void dropTable() {
        VendasMigration.drop();
    }


    @Override
    public void sow() {
    }
}
