package exercicio11;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class Exercicio11Test {

	@Test
	void testMuntante1() {
		Original o = new Original();
		assertEquals(3, o.contarA("Amanhã Será um novo dia"));
		
		Mutante1 m1 = new Mutante1();
		assertEquals(3, m1.contarA("Amanhã Será um novo dia"));
	}
	// Falha pois o mutante não reconhece letras maiusculas
	
	@Test
	void testMuntante2() {
		Original o = new Original();
		assertEquals(3, o.contarA("Amanhã Será um novo dia"));
		
		Mutante2 m2 = new Mutante2();
		assertEquals(3, m2.contarA("Amanhã Será um novo dia"));
	}
// Equivalente pois contador = contador + 1; e contador++ retornam o mesmo resultado
	
	
	@Test
	void testMuntante3() {
		Original o = new Original();
		assertEquals(3, o.contarA("Amanhã Será um novo dia"));
		
		Mutante3 m3 = new Mutante3();
		assertEquals(3, m3.contarA("Amanhã Será um novo dia"));
	}
		// 	Falha pois o mutante termina o laço uma iteração antes e o ultimo "a" 
		//não é contado por ser a ultima letra da frase
		// 

}
