package clienteeservidortcp;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author frede
 */
public class Servidor{

    private static Socket socket;
    private static ObjectInputStream entrada;
    private static ObjectOutputStream saida;

    public Servidor(){
        
    }
    
    public static Pessoa startServer(ServerSocket server){
        try {

                System.out.println("Aguardando requisições...");
                socket = server.accept();
                entrada = new ObjectInputStream(socket.getInputStream());
                Pessoa p = (Pessoa) entrada.readObject();
                System.out.println("================================================");
                System.out.println("Nome: " + p.getNome() + "\nMenssagem: " + p.getMsg()+"\n\n");                

                return p;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    
    public static void tokenResponse(ServerSocket server, String token){
        try {
            socket = server.accept();
            saida = new ObjectOutputStream(socket.getOutputStream());
            saida.writeObject(new Pessoa(token, ""));
            
        } catch (IOException ex) {
            Logger.getLogger(Servidor.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}
