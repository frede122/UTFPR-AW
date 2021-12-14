package exercicio17;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class CalculadoraTest {

	@Test
	void testC1() {
		Calculadora calc = new Calculadora();
		Salario sal = calc.calcularSalario("assalariado40h", 0);
		assertEquals(4000, sal.getValorSalario());
		assertEquals("", sal.getPendencia());
	}

	
	
	@Test
	void testC2() {
		Calculadora calc = new Calculadora();
		Salario sal = calc.calcularSalario("assalariado20h", 0);
		assertEquals(4000, sal.getValorSalario());
		assertEquals("", sal.getPendencia());
	}
	
	
	
	@Test
	void testC3() {
		Calculadora calc = new Calculadora();
		Salario sal = calc.calcularSalario("horista", 0);
		assertEquals(4000, sal.getValorSalario());
		assertEquals("", sal.getPendencia());
	}
	
	
	
	@Test
	void testC4() {
		Calculadora calc = new Calculadora();
		Salario sal = calc.calcularSalario("horista", 25);
		assertEquals(25 * 15, sal.getValorSalario());
		assertEquals("Relatorio de ausencia", sal.getPendencia());
	}
	
	
	
	@Test
	void testC5() {
		Calculadora calc = new Calculadora();
		Salario sal = calc.calcularSalario("horista", 60);
		assertEquals(60 * 15, sal.getValorSalario());
		assertEquals("relatorio de horas extras", sal.getPendencia());
	}
	
	
	
}
