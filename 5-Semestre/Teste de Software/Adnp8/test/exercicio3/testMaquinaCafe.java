package exercicio3;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Test;

class testMaquinaCafe {

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@Test
	void testPedirCafeTodosEstados() throws Exception {
		// new
		var maquina = new MaquinaCafe();
		// pedirCafe() /false
		assertFalse(maquina.pedirCafe());
		// adicionarMoeda()
		maquina.adicionarMoeda(1);
		// pedirCafe() / false
		assertFalse(maquina.pedirCafe());
		// adicionaMoeda()
		maquina.adicionarMoeda(1);
		// pedirCafe() / true
		assertTrue(maquina.pedirCafe());
		// pedirCafe() / false;
		assertFalse(maquina.pedirCafe());
	}

	@Test
	void testDemaisEventosLancarException() throws Exception {
		// new
		var maquina = new MaquinaCafe();	
		// adicionarMoeda(!= 1) / Exception
		assertThrows(Exception.class, () -> {
			maquina.adicionarMoeda(2);
		});
		// adicionaMoeda()
		maquina.adicionarMoeda(1);
		// adicionarMoeda(!= 1) / Exception
		assertThrows(Exception.class, () -> {
			maquina.adicionarMoeda(4);
		});
		// adicionaMoeda()
		maquina.adicionarMoeda(1);
		// adicionarMoeda(!= 1) / Exception
		assertThrows(Exception.class, () -> {
			maquina.adicionarMoeda(4);
		});
		// adicionarMoeda(1) / Exception
		assertThrows(Exception.class, () -> {
			maquina.adicionarMoeda(1);
		});
	}
}
