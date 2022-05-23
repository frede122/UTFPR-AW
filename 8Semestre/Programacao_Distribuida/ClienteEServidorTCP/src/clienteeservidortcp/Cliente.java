/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package clienteeservidortcp;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
/**
 *
 * @author frede
 */
public class Cliente {
    
    private static Socket socket;
    
    private static ObjectOutputStream saida;
    private static ObjectInputStream entrada;
    
    private static Pessoa p = new Pessoa("", "");
    private static int port = 50000;
    
    private static void enviar() throws IOException{
        socket = new Socket("127.0.0.1", getPort());   
        saida = new ObjectOutputStream(socket.getOutputStream());
        saida.writeObject(getP());
        System.out.println("Objeto enviado...");
        socket.close();
    }
    
    private static void receber() throws IOException, ClassNotFoundException {
        if(getP().getNome().equals("")){
            socket = new Socket("127.0.0.1", getPort());
            entrada = new ObjectInputStream(socket.getInputStream());
            Pessoa pes = (Pessoa) entrada.readObject();
            getP().setNome(pes.getNome());
            socket.close();
        }
    }
    public static void enviarMsg(int port, String msg) {
        getP().setMsg(msg);
        setPort(port);
        try {         
            enviar();
            receber();       
        } catch(Exception e) {
            e.printStackTrace();
        }
        
    }

    /**
     * @return the port
     */
    public static int getPort() {
        return port;
    }

    /**
     * @param aPort the port to set
     */
    public static void setPort(int aPort) {
        port = aPort;
    }

    /**
     * @return the p
     */
    public static Pessoa getP() {
        return p;
    }
    
}
