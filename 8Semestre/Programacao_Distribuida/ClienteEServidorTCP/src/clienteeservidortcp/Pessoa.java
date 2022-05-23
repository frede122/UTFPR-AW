/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package clienteeservidortcp;

/**
 *
 * @author frede
 */
import java.io.Serializable;

public class Pessoa implements Serializable {

    private String nome;
    private String msg;

    public Pessoa() {
    }

    public Pessoa(String nome, String msg) {
        this.nome = nome;
        this.msg = msg;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    /**
     * @return the msg
     */
    public String getMsg() {
        return msg;
    }

    /**
     * @param msg the msg to set
     */
    public void setMsg(String msg) {
        this.msg = msg;
    }

}

