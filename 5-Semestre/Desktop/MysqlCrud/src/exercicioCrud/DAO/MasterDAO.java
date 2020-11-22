/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import com.mysql.jdbc.DatabaseMetaData;
import com.mysql.jdbc.PreparedStatement;
import exercicioCrud.Model.Model;
import exercicioCrud.Util.JDBCUtil;

/**
 *
 * @author Frede
 */
public abstract class MasterDAO {

    protected Connection connection = null;
    protected Statement stdados = null;
    protected ResultSet rsdados = null;
    protected String banco;
    protected String url;
    protected String user;
    protected String pass;
    protected String driver;

    protected String sqlconsulta = "";
    protected String sqlinserir = "";
    protected String sqlalterar = "";
    protected String sqlexcluir = "";

    Model model;
    protected PreparedStatement prepStat;

    public MasterDAO() {
        JDBCUtil.init();
        url = JDBCUtil.getUrl();
        user = JDBCUtil.getUsername();
        pass = JDBCUtil.getPassword();
        driver = JDBCUtil.getDriver();
        banco = JDBCUtil.getBanco();
    }

    //Implementar nas classes filhas
    protected abstract void prepStatSet() throws SQLException;

    protected abstract void prepQuery();

    public abstract void createTable();
    
    public abstract void dropTable();
    
    public abstract void sow();

    //Metodos internos
    //Cria e abre a conexão
    protected boolean criaConexao() {
        try {
            Class.forName(driver);
            connection = DriverManager.getConnection(url + banco, user, pass);
        } catch (ClassNotFoundException erro) {
            System.out.println("Falha ao carregar o driver JDBC/ODBC." + erro);
            return false;
        } catch (SQLException erro) {
            System.out.println("Falha na conexao, comando sql = " + erro);
            return false;
        }
        return true;
    }
    //fecha a conexão

    protected boolean fechaConexao() {
        if (connection != null) {
            try {
                connection.close();
                return true;
            } catch (SQLException erro) {
                System.err.println("Erro ao fechar a conexão = " + erro);
                return false;
            }
        } else {
            return false;
        }
    }

    //verifica se a tabela existe
    public boolean tableExist() {
        String tabela = this.getModel().toString();
        try {
            criaConexao();
            DatabaseMetaData dm = (DatabaseMetaData) connection.getMetaData();
            ResultSet res = dm.getTables(null, null, tabela, null);
            while (res.next()) {
                System.out.println(
                        "Banco: " + res.getString("TABLE_CAT")
                        + "\nSchema: " + res.getString("TABLE_SCHEM")
                        + "\nTabela: " + res.getString("TABLE_NAME")
                        + "\nTipo: " + res.getString("TABLE_TYPE")
                        + "\nRemarks: " + res.getString("REMARKS")
                );
                return true;
            }
            return false;
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        fechaConexao();
        return false;
    }

    // Metodos externos da Class
    //Inserir na tabela
    public void inserir() {
        try {
            criaConexao();
            this.prepQuery();
            prepStat = (PreparedStatement) connection.prepareStatement(sqlinserir, ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            this.prepStatSet();
            prepStat.executeUpdate();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        fechaConexao();
    }
    //Retorna toda a tabela;

    public ResultSet returnAll() {
        try {
            criaConexao();
            this.prepQuery();
            prepStat = (PreparedStatement) connection.prepareStatement(sqlconsulta, ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            return prepStat.executeQuery();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        fechaConexao();
        return null;
    }
    //Atualiza uma tupla

    public void update() {
        try {
            criaConexao();
            this.prepQuery();
            prepStat = (PreparedStatement) connection.prepareStatement(sqlalterar, ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            this.prepStatSet();
            prepStat.executeUpdate();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        fechaConexao();
    }

    public void update(String sql) {
        try {
            criaConexao();
            prepStat = (PreparedStatement) connection.prepareStatement(sql, ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            prepStat.executeUpdate();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        fechaConexao();
    }

    //Deleta um tupla
    public int delete(int id) {
        try {
            criaConexao();
            this.prepQuery();
            prepStat = (PreparedStatement) connection.prepareStatement(sqlexcluir, ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            prepStat.setInt(1, id);
            return prepStat.executeUpdate();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        fechaConexao();
        return 0;
    }

    /**
     * @return the model
     */
    public Model getModel() {
        return model;
    }

}
