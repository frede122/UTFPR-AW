/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

//import sudokucheck.model.sudoku;
package sudokucheck;;

import java.util.logging.Level;
import java.util.logging.Logger;
import sudokucheck.model.sudoku;
import sudokucheck.model.sudoku;

/**
 *
 * @author frede
 */
public class SudokuCheck {
  
    
    public static void main(String[] args) {
        sudoku su = new sudoku();
        su.printTabela();
        System.out.println("\n");       
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                
                su.verificaColuna();
            }
        });
        
        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                su.verificaLinha();
            }
        });
        
        Thread t3 = new Thread(new Runnable() {
            @Override
            public void run() {
                su.verificaSubigrig1();
            }
        });
        
        Thread t4 = new Thread(new Runnable() {
            @Override
            public void run() {
                su.verificaSubigrig2();
            }
        });
        
        Thread t5 = new Thread(new Runnable() {
            @Override
            public void run() {
                su.verificaSubigrig3();
            }
        });
        
        Thread t6 = new Thread(new Runnable() {
            @Override
            public void run() {
                su.verificaSubigrig4();
            }
        });
        
        Thread t7 = new Thread(new Runnable() {
            @Override
            public void run() {
                su.verificaSubigrig5();
            }
        });
        
        Thread t8 = new Thread(new Runnable() {
            @Override
            public void run() {
                su.verificaSubigrig6();
            }
        });
        
        Thread t9 = new Thread(new Runnable() {
            @Override
            public void run() {
                su.verificaSubigrig7();
            }
        });
        
        Thread t10 = new Thread(new Runnable() {
            @Override
            public void run() {
                su.verificaSubigrig8();
            }
        });
        
        Thread t11 = new Thread(new Runnable() {
            @Override
            public void run() {
                su.verificaSubigrig9();
            }
        });

        
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();
        t6.start();
        t7.start();
        t8.start();
        t9.start();
        t10.start();
        t11.start();
        
        try {
            t1.join();
            t2.join();
            t3.join();
            t4.join();
            t5.join();
            t6.join();
            t7.join();
            t8.join();
            t9.join();
            t10.join();
            t11.join();
        } catch (InterruptedException ex) {
            Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
        }
        System.out.println("\n");
        System.out.println("Colunas são validas " + (su.valorColuna ? "sim": "nao"));
        System.out.println("Linhas são validas " + (su.valorLinha ? "sim": "nao"));
        System.out.println("subgrid 1 é valida ?: " + (su.subGrid1 ? "sim": "nao"));
        System.out.println("subgrid 2 é valida ?: " + (su.subGrid2 ? "sim": "nao"));
        System.out.println("subgrid 3 é valida ?: " + (su.subGrid3 ? "sim": "nao"));
        System.out.println("subgrid 4 é valida ?: " + (su.subGrid4 ? "sim": "nao"));
        System.out.println("subgrid 5 é valida ?: " + (su.subGrid5 ? "sim": "nao"));
        System.out.println("subgrid 6 é valida ?: " + (su.subGrid6 ? "sim": "nao"));
        System.out.println("subgrid 7 é valida ?: " + (su.subGrid7 ? "sim": "nao"));
        System.out.println("subgrid 8 é valida ?: " + (su.subGrid8 ? "sim": "nao"));
        System.out.println("subgrid 9 é valida ?: " + (su.subGrid9 ? "sim": "nao"));
        System.out.println("\n"); 
        System.out.println("O valor do Sudoku " + (su.sudokuIsValid() ? "é valido" : "não é valido"));
        

    }
    
   
}
    

