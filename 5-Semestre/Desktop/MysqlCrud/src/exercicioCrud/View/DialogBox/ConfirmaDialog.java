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
public class ConfirmaDialog {
    // Confirmar Exclusão
    public static boolean msgConfimarExclusao(String item){
            String message = "Deseja realmente excluir a entrada: "+ item + " ?";
            String title = "Confirmar Exclusão ?";            
            int reply = JOptionPane.showConfirmDialog(null, message, title, JOptionPane.YES_NO_OPTION);
            return reply == JOptionPane.YES_OPTION;
    }
    public static boolean msgConfimarExclusao(){
            String message = "Deseja realmente excluir o item ?";
            String title = "Confirmar Exclusão ?";            
            int reply = JOptionPane.showConfirmDialog(null, message, title, JOptionPane.YES_NO_OPTION);
            return reply == JOptionPane.YES_OPTION;
    }
    
    public static boolean msgConfimarExclusao(String message, String title){         
            int reply = JOptionPane.showConfirmDialog(null, message, title, JOptionPane.YES_NO_OPTION);
            return reply == JOptionPane.YES_OPTION;
    }
    
}
