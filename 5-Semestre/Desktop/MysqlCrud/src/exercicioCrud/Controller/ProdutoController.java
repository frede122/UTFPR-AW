/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Controller;

import exercicioCrud.DAO.ProdutoDAO;
import exercicioCrud.Model.Produto;

/**
 *
 * @author Frede
 */
public class ProdutoController extends MasterController<ProdutoDAO>{
    private Produto produto;
    private ProdutoDAO produtoDAO;
    
    public ProdutoController(){
        this.produto = new Produto();
        this.produtoDAO = new ProdutoDAO(getProduto());
        this.dao = produtoDAO;
    }
    
    

    public Produto getProduto() {
        return produto;
    }


    public void setProduto(Produto produto) {
        this.produto = produto;
    }

}
