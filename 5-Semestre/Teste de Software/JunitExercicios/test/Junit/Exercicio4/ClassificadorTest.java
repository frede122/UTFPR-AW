package Junit.Exercicio4;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class ClassificadorTest {

	@Test
	void testIdadeInvalida() {
		assertThrows(RuntimeException.class, ()-> {
			Classificador classificador = new Classificador();
			classificador.definirFaixaEtaria(new Pessoa("Maria", 115));
		});
	}
	@Test
	void testIdadeCrianca() {
		Classificador classificador = new  Classificador();
		assertEquals("Joao eh crianca", classificador.definirFaixaEtaria(new Pessoa("Joao", 5)));
	}
	
	@Test
	void testIdadeAdolescente() {
		Classificador classificador = new  Classificador();
		assertEquals("Fabiana eh adolescente", classificador.definirFaixaEtaria(new Pessoa("Fabiana", 15)));
	}
	@Test
	void testIdadeAdulto() {
		Classificador classificador = new  Classificador();
		assertEquals("Jose eh adulto", classificador.definirFaixaEtaria(new Pessoa("Jose", 32)));
	}
	@Test
	void testIdadeIdoso() {
		Classificador classificador = new  Classificador();
		assertEquals("Manuel eh idoso", classificador.definirFaixaEtaria(new Pessoa("Manuel", 75)));
	}

}
