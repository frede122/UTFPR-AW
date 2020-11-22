/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernateveiculo.DAO;

import hibernateveiculo.Model.Automovel;
import java.util.ArrayList;
import java.util.Set;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;

/**
 *
 * @author Frede
 */
public class AutomovelDAO extends MasterDAO <Automovel>{
    

    @Override
    public void setModel(Automovel model) {
        super.setModel(model); //To change body of generated methods, choose Tools | Templates.
    }
    
    // Criando Session
    private static SessionFactory factory;
    static {
        AnnotationConfiguration cfg = new AnnotationConfiguration();
        Set<String> stringPropertyNames = cfg.getProperties().stringPropertyNames();
        cfg.addAnnotatedClass(Automovel.class);
        factory = cfg.buildSessionFactory();
    }
    public static Session getSession() {
        return factory.openSession();
    }

    
    public AutomovelDAO(){
        this.model = new Automovel();
        this.session = getSession();
    }
    
}
