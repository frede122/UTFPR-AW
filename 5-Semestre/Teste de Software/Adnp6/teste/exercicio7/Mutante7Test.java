package exercicio7;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class Mutante7Test {

	@Test
	void testMutante1() {
		int [] vet  = {3,4,5,1};
		Original o = new Original();
		assertEquals(5, o.getMaior(vet));
		
		Mutante1 highlander = new Mutante1();
		assertEquals(5, highlander.getMaior(vet));;
	}
	
	@Test
	void testMutante2() {
		int [] vet  = {3,5,4,1};
		Original o = new Original();
		assertEquals(5, o.getMaior(vet));
		
		Mutante2 sean = new Mutante2();
		assertEquals(5, sean.getMaior(vet));;
	}
	
	
	@Test
	void testMutante3() {
		int [] vet  = {3,4, 5, 1};
		Original o = new Original();
		assertEquals(5, o.getMaior(vet));
		
		Mutante3 lambert = new Mutante3();
		assertEquals(5, lambert.getMaior(vet));
		// mutante equivalente, pq o maior é comparado com ele mesmo
	}

}
