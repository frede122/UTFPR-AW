/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jasper.Util;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Properties;

/**
 *
 * @author Frede
 */
public class JDBCUtil {

   
    private static String url;
    private static String username;
    private static String password;
    private static String driver;
    private static String banco;
    public static void init(){
        FileInputStream in = null;
        try {
            String path = System.getProperty("user.dir");
            File p = new File(path + "/src/BancoDeDados");
            if(!p.exists())
                p.mkdir();
            File config_file = new File(p, "config.properties");
            if(!config_file.exists()){
                config_file.createNewFile();
                criarArqDefault(config_file);
            }
            Properties prop = new Properties();
            in = new FileInputStream(config_file);
            prop.load(in);
            url = (prop.getProperty("jdbc.url") == null) ? "" : prop.getProperty("jdbc.url");
            username = (prop.getProperty("jdbc.username") == null) ? "" : prop.getProperty("jdbc.username");
            password = (prop.getProperty("jdbc.password") == null) ? "" : prop.getProperty("jdbc.password");
            driver = (prop.getProperty("jdbc.driver") == null) ? "" : prop.getProperty("jdbc.driver");
            banco = (prop.getProperty("jdbc.banco") == null) ? "" : prop.getProperty("jdbc.banco");
            in.close();
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
    
    
    private static void criarArqDefault(File f){
        BufferedWriter file = null;
        try {
            file = new BufferedWriter(new FileWriter(f, false));
            file.write("jdbc.url=jdbc:mysql://localhost/");
            file.newLine();
            file.write("jdbc.username=root");
            file.newLine();
            file.write("jdbc.password=123456");
            file.newLine();
            file.write("jdbc.driver=com.mysql.jdbc.Driver");
            file.newLine();
            file.write("jdbc.banco=exesete");
            file.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(f.getPath());
    }     

 /**
     * @return the url
     */
    public static String getUrl() {
        return url;
    }

    public static String getUsername() {
        return username;
    }


    public static String getPassword() {
        return password;
    }

    public static String getDriver() {
        return driver;
    }


    public static String getBanco() {
        return banco;
    }


}
