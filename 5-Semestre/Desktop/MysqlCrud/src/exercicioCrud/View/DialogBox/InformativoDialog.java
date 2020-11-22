/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicioCrud.View.DialogBox;

import javax.swing.JOptionPane;

/**
 *
 * @author Frede
 */
public class InformativoDialog {
    public static void msgItemNaoSelecionado(){
        JOptionPane.showMessageDialog(null,
                        "Nenhum item selecionado!\n"
                        + "Selecione um item e depois clique novamente, \n"
                        + "Obrigado!!");
    }
    public static void msgItemNaoSelecionado(String msg, boolean defaultMsg){
        String texto = msg;
        if(defaultMsg)
            texto = "Nenhum item selecionado!\n"
                    + "Selecione um item e depois clique novamente em "+ msg +"\n"
                    + "Obrigado!!";
        JOptionPane.showMessageDialog(null, texto);                   
    }
    
    
}
