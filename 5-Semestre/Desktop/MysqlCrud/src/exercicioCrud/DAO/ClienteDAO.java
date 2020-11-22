/*
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.DAO;

import exercicioCrud.Seeders.ProdutoSeed;
import exercicioCrud.Migration.ClienteMigration;
import exercicioCrud.Model.Cliente;
import exercicioCrud.Seeders.ClienteSeed;
import java.sql.SQLException;

/**
 *
 * @author Frede
 */
public class ClienteDAO extends MasterDAO{
    private Cliente cliente;
    

    public ClienteDAO(Cliente cli){
        this.cliente = cli;
        this.model = cli;
    }
    
    public ClienteDAO(){
        this.cliente = new Cliente();
        this.model = cliente;
    }
        
    @Override
    protected void prepQuery() {
        this.sqlconsulta = "SELECT * FROM "+ cliente;
        this.sqlinserir = "INSERT INTO "+cliente+" (nome, cpf, endereco, email ) VALUES( ?, ?, ?, ?);";
        this.sqlalterar = "UPDATE "+cliente+" SET nome = ?, cpf = ?, endereco = ?, email = ? WHERE id = "+ cliente.getId()+";";
        this.sqlexcluir = "DELETE FROM "+cliente+" WHERE id = ?;";
    }
        
        
    @Override
    protected void prepStatSet() throws SQLException{            
        this.prepStat.setString(1, this.cliente.getNome());
        this.prepStat.setString(2, this.cliente.getCpf());
        this.prepStat.setString(3, this.cliente.getEndereco());
        this.prepStat.setString(4, this.cliente.getEmail());
    }

    @Override
    public void createTable() {
        ClienteMigration.create();
    }

    @Override
    public void dropTable() {
        ClienteMigration.drop();
    }

    @Override
    public void sow() {
        ClienteSeed.sow();
    }


    
}
