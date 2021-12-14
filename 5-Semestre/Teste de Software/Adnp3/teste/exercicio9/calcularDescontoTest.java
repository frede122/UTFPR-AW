package exercicio9;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class calcularDescontoTest {

	Calcula calc;
	@BeforeEach
	void beforeAll() {
		calc = new Calcula();
	}
	
	@Test
	void testC1() {
		assertEquals(10,  calc.calcularDesconto(true, false, ""));
	}

	
	@Test
	void testC2() {
		assertEquals(37,  calc.calcularDesconto(false, true, "asdfre"));
	}
		
	
	@Test
	void testC3() {
		assertEquals(12,  calc.calcularDesconto(false, true, ""));
	}
	
	
	@Test
	void testC4() {
		assertEquals(25,  calc.calcularDesconto(false, false, "asdfre"));
	}
	
	
	@Test
	void testC5() {
		assertEquals(0,  calc.calcularDesconto(false, false, ""));
	}
	
	
}
