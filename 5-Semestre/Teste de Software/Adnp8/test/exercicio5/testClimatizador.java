package exercicio5;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Test;

class testClimatizador {

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@Test
	void testUmidificando() {
		// new
		var climatizador = new Climatizador();

		// ligar
		climatizador.ligar();
		// umificar
		climatizador.umidificar();
		// umidificando() /false
		assertFalse(climatizador.umidificando());
		// Umidificar
		climatizador.umidificar();
		// umidificando() /false
		assertTrue(climatizador.umidificando());
		// aumentarV / true
		assertTrue(climatizador.aumentarV());
		// Umidificar
		climatizador.umidificar();
		// umidificando() /false
		assertFalse(climatizador.umidificando());
		// umificar
		climatizador.umidificar();
		// umidificando / true
		assertTrue(climatizador.umidificando());
	}

	@Test
	void testDesligar() {
		// new
		var climatizador = new Climatizador();

		// ligar
		climatizador.ligar();
		// desligar
		climatizador.desligar();
		// velocidade / 0
		assertEquals(0, climatizador.velocidade());
		// ligar
		climatizador.ligar();
		// aumentarv / true
		assertTrue(climatizador.aumentarV());
		// umidificar
		climatizador.umidificar();
		// desligar
		climatizador.desligar();
		// velicidade / 0
		assertEquals(0, climatizador.velocidade());
	}

	@Test
	void testDemaisNaoCobertos() {
		// new
		var climatizador = new Climatizador();

		// ligar
		climatizador.ligar();
		// velocidade / 1
		assertEquals(1, climatizador.velocidade());
		// umidificando / true
		assertTrue(climatizador.umidificando());
		// ligar / Exception
		assertThrows(Exception.class, () -> climatizador.ligar());
		// umidificar
		climatizador.umidificar();
		// velocidade / 1
		assertEquals(1, climatizador.velocidade());
		// umidificando / false
		assertFalse(climatizador.umidificando());
		// diminuirV() / false
		assertFalse(climatizador.diminuirV());
		// umidificar
		climatizador.umidificar();
		// velocidade / 1
		assertEquals(1, climatizador.velocidade());
		// umidificando / true
		assertTrue(climatizador.umidificando());
		// ligar / Exception
		assertThrows(Exception.class, () -> climatizador.ligar());
		// aumentarV / true
		assertTrue(climatizador.aumentarV());
		// aumentarV / false
		assertFalse(climatizador.aumentarV());
		// velocidade / 2
		assertEquals(2, climatizador.velocidade());
		// umidificando / true
		assertTrue(climatizador.umidificando());
		// umidificar
		climatizador.umidificar();
		// aumentarV / false
		assertFalse(climatizador.aumentarV());
		// velocidade / 2
		assertEquals(2, climatizador.velocidade());
		// umidificando / false
		assertFalse(climatizador.umidificando());
		// umidificar
		climatizador.umidificar();
		// aumentarV / false
		assertFalse(climatizador.aumentarV());
		// velocidade / 2
		assertEquals(2, climatizador.velocidade());
		// umidificando / true
		assertTrue(climatizador.umidificando());
		// diminuirV / true
		assertTrue(climatizador.diminuirV());
		//desligar
		climatizador.desligar();
		// desligar / Exceptio
		assertThrows(Exception.class, ()-> climatizador.desligar());
		// velocidade  / 0
		assertEquals(0, climatizador.velocidade());

	}
}
