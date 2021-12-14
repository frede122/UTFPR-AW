package ExerciciosMutante;

import static org.junit.jupiter.api.Assertions.*;

import java.time.Duration;

import org.junit.jupiter.api.Test;

class MutentaExercicioTest {

	@Test
    public void matarMutante01() {
        Original o = new Original();
        assertEquals(1.0, o.pow(3, 0), 0.0001);
        Mutante1 m1 = new Mutante1();
        assertEquals(1.0, m1.pow(3, 0), 0.0001);
   }
    
    @Test
    public void matarMutante02() {
        Original o = new Original();
        
        assertEquals(3.0, o.pow(3, 1), 0.0001);
        
        assertTimeoutPreemptively(Duration.ofSeconds(1), () -> {
            Mutante2 m2 = new Mutante2();
            assertEquals(3.0, m2.pow(3, 1), 0.0001);      	
        });
    }    

    @Test
    public void matarMutante03() {
        Original o = new Original();
        
        assertEquals(3.0, o.pow(3, 1), 0.0001);  
        Mutante3 m3 = new Mutante3();
        assertEquals(3.0, m3.pow(3, 1), 0.0001);
    }    
    
    @Test
    public void matarMutante04() {
        Original o = new Original();
        
        assertEquals(27.0, o.pow(3, 3), 0.0001);
        
        Mutante4 m4 = new Mutante4();
        assertEquals(27.0, m4.pow(3, 3), 0.0001);
    }    

}
