/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernateveiculo.Migrations;

import hibernateveiculo.Model.Automovel;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.tool.hbm2ddl.SchemaExport;

/**
 *
 * @author Frede
 */
public class GerarTabelas {
    public void gerarTabelaAutomovel(){
        AnnotationConfiguration cfg = new AnnotationConfiguration();
        // Adiciona a classe Produto
        cfg.addAnnotatedClass(Automovel.class);
        new SchemaExport(cfg).create(true, true);
    }
}
