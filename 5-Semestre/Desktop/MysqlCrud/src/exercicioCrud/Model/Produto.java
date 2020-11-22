/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.Model;

/**
 *
 * @author Frede
 */
public class Produto extends Model{
    
    private String nome ="";
    private String unidade_medida = "";
    private String descricao = "";

    public String getNome() {
        return nome;
    }


    public void setNome(String nome) {
        this.nome = nome;
    }


    public String getUnidade_medida() {
        return unidade_medida;
    }


    public void setUnidade_medida(String unidade_medida) {
        this.unidade_medida = unidade_medida;
    }


    public String getDescricao() {
        return descricao;
    }


    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

}
