package exercicio16;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class Exercicio16Test {

	@Test
	void testMutante1() {
		Pessoa p = new Pessoa("Frede", 129);
		
		Original o = new Original();
		assertThrows(IllegalArgumentException.class, ()->{
			assertEquals(1, o.definirFaixaEtaria(p));	
		});
		
		Mutante1 m1 = new Mutante1();
		assertThrows(IllegalArgumentException.class, ()->{
			assertEquals(1, m1.definirFaixaEtaria(p));	
		});
	}// Falha pois é impossivel dar esse tipo de excpetion (ser menor que 0 e maior que 110)

	@Test
	void testMutante2() {
		Pessoa p = new Pessoa("Frede", 18);
		
		Original o = new Original();
		assertEquals("Frede eh adolescente", o.definirFaixaEtaria(p));
		
		Mutante2 m2 = new Mutante2();
		assertEquals("Frede eh adolescente", m2.definirFaixaEtaria(p));
	}// Falha pois ter dezoite é ponto entre ser ou não adolescente, sendo true no original e false no mutante

	@Test
	void testMutante3() {
		Pessoa p = new Pessoa("Frede", 58);
		
		Original o = new Original();
		assertEquals("Frede eh adulto", o.definirFaixaEtaria(p));
		
		Mutante3 m3 = new Mutante3();
		assertEquals("Frede eh adolescente", m3.definirFaixaEtaria(p));
	}// Falha pois somente sera considerado adulto no mutante caso tenha exatos 59 anos


}
