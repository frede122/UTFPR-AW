/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sudokucheck.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import sudokucheck.SudokuCheck;

/**
 *
 * @author frede
 */




public class sudoku {
    //sudoku valido
//    int[][] tabela ={{2,3,7,8,4,1,5,6,9}, 
//                     {1,8,6,7,9,5,2,4,3}, 
//                     {5,9,4,3,2,6,7,1,8},
//                     {3,1,5,6,7,4,8,9,2},
//                     {4,6,9,5,8,2,1,3,7},
//                     {7,2,8,1,3,9,4,5,6},
//                     {6,4,2,9,1,8,3,7,5},
//                     {8,5,3,4,6,7,9,2,1},
//                     {9,7,1,2,5,3,6,8,4}};
    int[][] tabela ={{2,3,7,8,4,1,5,6,9}, 
                     {1,8,6,7,9,5,2,4,3}, 
                     {5,9,4,3,2,6,7,1,8},
                     {3,1,5,6,7,4,8,9,2},
                     {4,6,9,5,8,2,1,3,7},
                     {7,2,8,1,3,9,4,5,6},
                     {6,4,2,9,1,8,3,7,5},
                     {8,5,3,4,6,7,9,2,1},
                     {9,7,1,2,5,3,6,8,4}};
    
    public sudoku(){
        
    }
    
    
    Object bloqueio1 = new Object();
    Object bloqueio2 = new Object();
    Object bloqueio3 = new Object();
    Object bloqueio4 = new Object();
    Object bloqueio5 = new Object();
    Object bloqueio6 = new Object();
    Object bloqueio7 = new Object();
    Object bloqueio8 = new Object();
    Object bloqueio9 = new Object();
    Object bloqueio10 = new Object();
    Object bloqueio11 = new Object();
    

    public boolean valorColuna;
    public boolean valorLinha;
    public boolean subGrid1;
    public boolean subGrid2;
    public boolean subGrid3;
    public boolean subGrid4;
    public boolean subGrid5;
    public boolean subGrid6;
    public boolean subGrid7;
    public boolean subGrid8;
    public boolean subGrid9;
    
    public SudokuCheck sudoku = new SudokuCheck();
    public void verificaColuna(){
        synchronized (bloqueio1) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            
            valorColuna = columnIsValid(0, 0, 9);
            System.out.println("Verifica Coluna ");
         
        }
    }
    
   public void verificaLinha(){
        synchronized (bloqueio2) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            sudoku su = new sudoku();
            valorLinha = su.lineIsValid(0, 0, 9);
            System.out.println("Verifica Linha ");
        }
   }
   
   public void verificaSubigrig1(){
        synchronized (bloqueio3) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            sudoku su = new sudoku();
            subGrid1 = su.lineIsValid(0, 0, 3) && su.columnIsValid(0, 0, 3);
            System.out.println("Verifica subgrid 1 ");
            
        }       
   }
   
   public void verificaSubigrig2(){
        synchronized (bloqueio4) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            sudoku su = new sudoku();
            subGrid2 = su.lineIsValid(0, 3, 3) && su.columnIsValid(0, 3, 3);
            System.out.println("Verifica subgrid 2 ");
        }       
   }
   
   public void verificaSubigrig3(){
        synchronized (bloqueio5) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            sudoku su = new sudoku();
            subGrid3 = su.lineIsValid(0, 6, 3) && su.columnIsValid(0, 6, 3);
            System.out.println("Verifica subgrid 3 ");

        }       
   }
   
   public void verificaSubigrig4(){
        synchronized (bloqueio6) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            sudoku su = new sudoku();
            subGrid4 = su.lineIsValid(3, 0, 3) && su.columnIsValid(3, 0, 3);
            System.out.println("Verifica subgrid 4 ");

        }       
   }
   
   public void verificaSubigrig5(){
        synchronized (bloqueio7) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            sudoku su = new sudoku();
            subGrid5 = su.lineIsValid(3, 3, 3) && su.columnIsValid(3, 3, 3);
            System.out.println("Verifica subgrid 5 ");
        }       
   }
   
   public void verificaSubigrig6(){
        synchronized (bloqueio8) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            sudoku su = new sudoku();
            subGrid6 = su.lineIsValid(3, 6, 3) && su.columnIsValid(3, 6, 3);
            System.out.println("Verifica subgrid 6 ");

        }       
   }
   
   public void verificaSubigrig7(){
        synchronized (bloqueio9) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            sudoku su = new sudoku();
            subGrid7 = su.lineIsValid(6, 0, 3) && su.columnIsValid(6, 0, 3);
            System.out.println("Verifica subgrid 7 ");
        }       
   }
   
   public void verificaSubigrig8(){
        synchronized (bloqueio10) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            sudoku su = new sudoku();
            subGrid8 = su.lineIsValid(6, 3, 3) && su.columnIsValid(6, 3, 3);
            System.out.println("Verifica subgrid 8 ");

        }       
   }
   
   public void verificaSubigrig9(){
        synchronized (bloqueio11) {        
            try {
                Thread.sleep(1);
            } catch (InterruptedException ex) {
                Logger.getLogger(SudokuCheck.class.getName()).log(Level.SEVERE, null, ex);
            }
            sudoku su = new sudoku();
            subGrid9 = su.lineIsValid(6, 6, 3) && su.columnIsValid(6, 6, 3);
            System.out.println("Verifica subgrid 9 ");

        }       
   }
   
    
    
    

    

    //linha
    public boolean lineIsValid(int initJ, int initK, int qtd){

        for(int j = initJ; j < (initJ + qtd); j++){
            ArrayList<Integer> aux = new ArrayList();
            for(int k = initK; k < (initK + qtd); k++){
                
                if(j == initJ && k == initK){
                    aux.add(this.tabela[j][k]);
                }else{
                    
                    if(aux.contains(this.tabela[j][k]) || this.tabela[j][k] < 1 || this.tabela[j][k] >9)
                        return false;
                    aux.add(this.tabela[j][k]);
                }
            }
        }
        return true;
    }

        //coluna
    public boolean columnIsValid( int initK, int initJ, int qtd){

        for(int j = initJ; j < (initJ + qtd); j++){
            ArrayList<Integer> aux = new ArrayList();
            for(int k = initK; k < (initK + qtd); k++){
                
                if(j == initJ && k == initK){
                    aux.add(this.tabela[k][j]);
                }else{
                    
                    if(aux.contains(this.tabela[k][j]) || this.tabela[k][j] < 1 || this.tabela[k][j] >9)
                        return false;
                    aux.add(this.tabela[k][j]);
                }
            }
        }
        return true;
    }
    
    public boolean sudokuIsValid(){
        return  valorColuna &&
                valorLinha &&
                subGrid1 && 
                subGrid2 && 
                subGrid3 && 
                subGrid4 && 
                subGrid5 && 
                subGrid6 && 
                subGrid7 && 
                subGrid8 && 
                subGrid9;
//        return false;
        
    }
    
    public void printTabela(){
        for(int j = 0; j < 9; j++){         
            for(int k = 0; k < 9; k++){             
                    System.out.print(this.tabela[j][k]);
            }
            System.out.println("");
        }
    }
    
}
