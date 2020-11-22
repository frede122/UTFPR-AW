/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jasper.Controller;

import com.mysql.jdbc.PreparedStatement;
import java.sql.ResultSet;
import jasper.Conn.BD;
import jasper.Model.Model;
import java.sql.SQLException;

/**
 *
 * @author Frede
 */
public abstract class MasterController {
    protected BD bd = new BD();
    protected Model model;
    protected PreparedStatement prepStat;
    
    public MasterController(){
        
    }
    public ResultSet returnAll(){
        return bd.ExecutaQuery("SELECT * FROM "+ model.toString() +";");
    }
    protected void returnPrepareStateInsert(){
        try {
            String values = "?";
            for(int i=1; i < model.getFilable().length; i++){ values = "?,"+ values;}
            String sql = "INSERT INTO "+ model.toString()
                    + " ("+ String.join(", ", model.getFilable()) + ") "
                    + "VALUES (" + values + ")";
            System.out.println(sql);
            prepStat = (PreparedStatement) bd.getConnection().prepareStatement(sql, ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
    
    protected void returnPrepareStateUpdate(){
        try {
            String values = model.getFilable()[0]+ " = ?";
            for(int i=1; i < model.getFilable().length; i++){
                values = values + ", " + model.getFilable()[i]+ " = ?";
            }
            String sql = "UPDATE "+ model.toString() +" SET "+values+" WHERE id = " + model.getId();
            System.out.println(sql);
            prepStat = (PreparedStatement) bd.getConnection().prepareStatement(sql, ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
    
//    public abstract void update();
    
    public abstract void prepStatObjts() throws SQLException;
    
    public void insert() {
        try {
            returnPrepareStateInsert();
            prepStat.setInt(1, 0);
            prepStatObjts();
            System.out.println(prepStat.executeUpdate());
        } catch (SQLException ex) {
            ex.printStackTrace();
        }

    }
    
    public void update() {
        try {
            returnPrepareStateUpdate();
            prepStat.setInt(1, model.getId());
            prepStatObjts();
            prepStat.executeUpdate();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
    
    public int delete(){
        try {
            String sql = "DELETE FROM " + model.toString() + " WHERE id = ?";
            prepStat = (PreparedStatement) bd.getConnection().prepareStatement(sql, ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            prepStat.setInt(1, model.getId());
            return prepStat.executeUpdate();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return 0;
    }
}
