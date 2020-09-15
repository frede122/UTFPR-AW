/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package TrabalhoObject.Model;

/**
 *
 * @author Frede
 */
public class Fornecedor extends Model implements java.io.Serializable{
    private static final long serialVersionUID = 1L;


    /**
     * @return the nome
     */
    public String getNome() {
        return nome;
    }

    /**
     * @param nome the nome to set
     */
    public void setNome(String nome) {
        this.nome = nome;
    }

    /**
     * @return the cNPJ
     */
    public String getcNPJ() {
        return cNPJ;
    }

    /**
     * @param cNPJ the cNPJ to set
     */
    public void setcNPJ(String cNPJ) {
        this.cNPJ = cNPJ;
    }

    /**
     * @return the Endereco
     */
    public String getEndereco() {
        return Endereco;
    }

    /**
     * @param Endereco the Endereco to set
     */
    public void setEndereco(String Endereco) {
        this.Endereco = Endereco;
    }

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }
    private int id = 0;
    private String nome = "";
    private String cNPJ = "";
    private String Endereco = "";
    private String email = "";
}
