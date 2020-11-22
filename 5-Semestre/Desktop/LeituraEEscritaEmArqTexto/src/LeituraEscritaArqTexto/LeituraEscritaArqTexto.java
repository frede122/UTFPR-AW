/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package LeituraEscritaArqTexto;

import LeituraEscritaArqTexto.Controller.ClienteController;
import LeituraEscritaArqTexto.Controller.FornecedorController;
import LeituraEscritaArqTexto.Controller.ProdutoController;
import LeituraEscritaArqTexto.Model.Cliente;
import LeituraEscritaArqTexto.Model.Fornecedor;
import LeituraEscritaArqTexto.View.Principal;

/**
 *
 * @author Frede
 */
public class LeituraEscritaArqTexto {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        ClienteController c = new ClienteController();
        c.retornarTodosCliente();
        FornecedorController f = new FornecedorController();
        f.retornarTodosFornecedores();
        ProdutoController p = new ProdutoController();
        p.retornarTodosProduto();
        Principal princpal = new Principal();
        princpal.setVisible(true);
        
       
        
    }
    
}
