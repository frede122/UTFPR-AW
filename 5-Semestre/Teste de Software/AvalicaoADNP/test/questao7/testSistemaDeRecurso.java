package questao7;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

class testSistemaDeRecurso {

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testLogado() {
		// new
		SistemaDeRecurso sr = new SistemaDeRecurso();
		
		// login valido / true
		assertTrue(sr.login("adm","123"));
		
		// logout
		sr.logout();
		
		// is logado / False
		assertFalse(sr.isLogado());
		
		// login valido / true
		assertTrue(sr.login("adm","123"));
		
		// acessar / REC 1
		assertEquals("REC1", sr.acessar());
		
		// acessar 2 / REC2 
		assertEquals("REC2", sr.acessar());
		
		// is logado / true
		assertTrue(sr.isLogado());
		
		//logout 		
		sr.logout();
		
		// is logado / true
		assertFalse(sr.isLogado());
				
		
	}
	@Test
	void testModificado() {
		
		// new
		SistemaDeRecurso sr = new SistemaDeRecurso();
		
		// modificar() / Exception
		assertThrows(Exception.class, ()-> sr.modificar());
		
		// login valido / true
		assertTrue(sr.login("adm","123"));
		
		// login valido / true
		assertTrue(sr.login("adm","123"));
		
		// acessar() / "REC1"
		assertEquals("REC1", sr.acessar());
		
		// modificar() / "REC1 modificado"
		assertEquals("REC1 modificado", sr.modificar());
		
		// acessar() / "REC2" 
		assertEquals("REC2", sr.acessar());
		
		// modificar() / "REC2 modificado"
		assertEquals("REC2 modificado", sr.modificar());
	}
	
	@Test
	void testRestanteDaCobertura() {
		// new
		SistemaDeRecurso sr = new SistemaDeRecurso();
		
		//loginInvalido / false
		assertFalse(sr.login("user", "senha"));
		
		//Acessar() / Exception
		assertThrows(Exception.class, ()->sr.acessar());
		
		//islogado() / false
		assertFalse(sr.isLogado());
		
	}

}
