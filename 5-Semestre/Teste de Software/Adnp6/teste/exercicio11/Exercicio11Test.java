package exercicio11;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class Exercicio11Test {

	@Test
	void testMuntante1() {
		Original o = new Original();
		assertEquals(3, o.contarA("Amanh� Ser� um novo dia"));
		
		Mutante1 m1 = new Mutante1();
		assertEquals(3, m1.contarA("Amanh� Ser� um novo dia"));
	}
	// Falha pois o mutante n�o reconhece letras maiusculas
	
	@Test
	void testMuntante2() {
		Original o = new Original();
		assertEquals(3, o.contarA("Amanh� Ser� um novo dia"));
		
		Mutante2 m2 = new Mutante2();
		assertEquals(3, m2.contarA("Amanh� Ser� um novo dia"));
	}
// Equivalente pois contador = contador + 1; e contador++ retornam o mesmo resultado
	
	
	@Test
	void testMuntante3() {
		Original o = new Original();
		assertEquals(3, o.contarA("Amanh� Ser� um novo dia"));
		
		Mutante3 m3 = new Mutante3();
		assertEquals(3, m3.contarA("Amanh� Ser� um novo dia"));
	}
		// 	Falha pois o mutante termina o la�o uma itera��o antes e o ultimo "a" 
		//n�o � contado por ser a ultima letra da frase
		// 

}
