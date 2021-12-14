package exercicio6;

import static org.junit.jupiter.api.Assertions.*;

import javax.sound.midi.Soundbank;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TestarCalculadora {

	Calculadora calc;
	int vetor[] = {1,2,3,5,8};
	@BeforeEach
	void beforeAll() {
		calc = new Calculadora();
	}
	
	@Test
	void testIntevalorInicioMenor0() {	
		assertEquals(-1, calc.calcularMedia(vetor, -1, 4), 0.01);
	}
	@Test
	void testIntevalorFimMenor0() {	
		assertEquals(-1, calc.calcularMedia(vetor, 1, -1), 0.01);
	}
	@Test
	void testIntevalorInicioMaiorOuIgualFim() {	
		assertEquals(-1, calc.calcularMedia(vetor, 3, 2), 0.01);
	}

	@Test
	void testSoma() {	
		assertEquals(3.8, calc.calcularMedia(vetor, 0, 8), 0.01);
	}
}
