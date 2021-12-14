package exercicio14;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class Exercicio14Test {

	@Test
	void testMutante1() {
		int [] ano = {2000,  2020, 2400};
		Original o = new Original();
		
		assertEquals(3, o.calcularAnosBissexto(ano));
		
		Mutante1 m1 = new Mutante1();
		assertEquals(3, m1.calcularAnosBissexto(ano));
	}
	// Falha pois somente multiplo de 400 estão sendo contabilizados

	
	@Test
	void testMutante2() {
		int [] ano = {2000,  2020, 2100};
		Original o = new Original();
		
		assertEquals(2, o.calcularAnosBissexto(ano));
		
		Mutante2 m2 = new Mutante2();
		assertEquals(2, m2.calcularAnosBissexto(ano));
		
	}
	// Falha pois 2100 é sim divisivel por 4 porem tmb é por 100 e por isso esbarra na condição !=

	@Test
	void testMutante3() {
		int [] ano = {200,  2020, 2080};
		Original o = new Original();
		
		assertEquals(2, o.calcularAnosBissexto(ano));
		
		Mutante3 m3 = new Mutante3();
		assertEquals(2, m3.calcularAnosBissexto(ano));
		
	}
	// Falha pois 200 é sim divisivel por 40 porem tmb é por 100 e por isso esbarra na condição !=

	
	
}
