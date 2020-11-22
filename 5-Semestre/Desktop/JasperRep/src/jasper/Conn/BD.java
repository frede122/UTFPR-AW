/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jasper.Conn;

import com.mysql.jdbc.DatabaseMetaData;
import jasper.Util.JDBCUtil;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import org.postgresql.jdbc.PgDatabaseMetaData;

/**
 *
 * @author Frede
 */
public class BD {
    private Connection connection = null;
    private Statement stdados = null;
    private ResultSet rsdados = null;
//    private String url = "jdbc:postgresql://localhost:5432/postgres";
//    private String url = "jdbc:mysql://localhost/";
//    private String user = "root";
//    private String url = "jdbc:mysql://localhost/";
//    private String pass = "123456";
//    private String driver = "com.mysql.jdbc.Driver";
//    private String banco = "ex";
    private String banco;
    private String url;
    private String user;
    private String pass;
    private String driver;
    
    public BD(){
        JDBCUtil.init();
        url = JDBCUtil.getUrl();
        user = JDBCUtil.getUsername();
        pass = JDBCUtil.getPassword();
        driver = JDBCUtil.getDriver();
        banco = JDBCUtil.getBanco();
        BDInit();
    }
    public boolean BDInit(){
        try {
//            Class.forName("org.postgresql.Driver");
            
            Class.forName(getDriver());
            setConnection(DriverManager.getConnection(getUrl()+getBanco(), getUser(), getPass()));
        } catch (ClassNotFoundException erro) {
            System.out.println("Falha ao carregar o driver JDBC/ODBC." + erro);
            return false;
        } catch (SQLException erro) {
            System.out.println("Falha na conexao, comando sql = " + erro);
            return false;
        }
        return true;
    }
    
    
    public ResultSet ExecutaQuery(String query) {
        try {
           int tipo = ResultSet.TYPE_SCROLL_SENSITIVE;
           int concorrencia = ResultSet.CONCUR_READ_ONLY;
            setStdados(getConnection().createStatement(tipo, concorrencia));
           return getStdados().executeQuery(query);
        } catch (SQLException erro) {
            System.out.println("Erro Executa Query = " + erro);
        }
        return null;
    }
    
    
    public boolean TableExist(String tabela){
        try {
            DatabaseMetaData dm = (DatabaseMetaData) getConnection().getMetaData();
            ResultSet res = dm.getTables(null, null, tabela, null);
            while (res.next()) {
                System.out.println(
                                  "Banco: "+res.getString("TABLE_CAT")
                                + "\nSchema: "+res.getString("TABLE_SCHEM")
                                + "\nTabela: "+res.getString("TABLE_NAME")
                                + "\nTipo: "+res.getString("TABLE_TYPE") 
                                + "\nRemarks: "+res.getString("REMARKS")
                );
                return true;
            }
            return false;
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return false;
    }
    
    
    public int ExecutaUpdate(String query) {
        try {
            int tipo = ResultSet.TYPE_SCROLL_SENSITIVE;//(c)
            int concorrencia = ResultSet.CONCUR_UPDATABLE;
            setStdados(getConnection().createStatement(tipo, concorrencia));
            int resposta = getStdados().executeUpdate(query);
            return resposta;
            
        } catch (SQLException erro) {
            erro.printStackTrace();
        }
        return 0;
    }
    
        public int ExecutaUpdate(String query, Object a) {
        try {
            int tipo = ResultSet.TYPE_SCROLL_SENSITIVE;//(c)
            int concorrencia = ResultSet.CONCUR_UPDATABLE;
            setStdados(getConnection().createStatement(tipo, concorrencia));
            int resposta = getStdados().executeUpdate(query);
            System.out.println(a.getClass().getCanonicalName());
            return resposta;
            
        } catch (SQLException erro) {
            erro.printStackTrace();
        }
        return 0;
    }


        
        
  
        
        
        
        
        
    public Connection getConnection() {
        return connection;
    }

    /**
     * @param connection the connection to set
     */
    public void setConnection(Connection connection) {
        this.connection = connection;
    }

    /**
     * @return the stdados
     */
    public Statement getStdados() {
        return stdados;
    }

    /**
     * @param stdados the stdados to set
     */
    public void setStdados(Statement stdados) {
        this.stdados = stdados;
    }

    /**
     * @return the rsdados
     */
    public ResultSet getRsdados() {
        return rsdados;
    }

    /**
     * @param rsdados the rsdados to set
     */
    public void setRsdados(ResultSet rsdados) {
        this.rsdados = rsdados;
    }

    /**
     * @return the url
     */
    public String getUrl() {
        return url;
    }

    /**
     * @param url the url to set
     */
    public void setUrl(String url) {
        this.url = url;
    }

    /**
     * @return the user
     */
    public String getUser() {
        return user;
    }

    /**
     * @param user the user to set
     */
    public void setUser(String user) {
        this.user = user;
    }

    /**
     * @return the pass
     */
    public String getPass() {
        return pass;
    }

    /**
     * @param pass the pass to set
     */
    public void setPass(String pass) {
        this.pass = pass;
    }

    /**
     * @return the driver
     */
    public String getDriver() {
        return driver;
    }

    /**
     * @param driver the driver to set
     */
    public void setDriver(String driver) {
        this.driver = driver;
    }

    /**
     * @return the banco
     */
    public String getBanco() {
        return banco;
    }

    /**
     * @param banco the banco to set
     */
    public void setBanco(String banco) {
        this.banco = banco;
    }
}
