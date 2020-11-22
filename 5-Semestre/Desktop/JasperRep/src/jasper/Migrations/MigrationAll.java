/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jasper.Migrations;

/**
 *
 * @author Frede
 */
public class MigrationAll {
    public static void init(){
        FabricanteMigration.create();
        AutomovelMigration.create();
    }
}
