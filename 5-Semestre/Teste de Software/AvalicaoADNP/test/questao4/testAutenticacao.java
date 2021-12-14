package questao4;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

class testAutenticacao {

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testC1() {
		Usuario user = new Usuario("", "123456", "normal");
		Autenticacao aut = new Autenticacao();
		assertEquals("e-mail/senha não podem ser vazio.", aut.login(user));
	}
	
	@Test
	void testC2() {
		Usuario user = new Usuario("email@email.com", "", "normal");
		Autenticacao aut = new Autenticacao();
		assertEquals("e-mail/senha não podem ser vazio.", aut.login(user));
	}
	@Test
	void testC3() {
		Usuario user = new Usuario("", "", "normal");
		Autenticacao aut = new Autenticacao();
		assertEquals("e-mail/senha não podem ser vazio.", aut.login(user));
	}
	@Test
	void testC4() {
		Usuario user = new Usuario("email.com", "123456", "normal");
		Autenticacao aut = new Autenticacao();
		assertEquals("e-mail fora do formato", aut.login(user));
	}
	@Test
	void testC5() {
		Usuario user = new Usuario("email@email.com", "12", "normal");
		Autenticacao aut = new Autenticacao();
		assertEquals("a senha tem ao menos 4 caracteres", aut.login(user));
	}
	@Test
	void testC6() {
		Usuario user = new Usuario("emailnaoexistente@email.com", "123456", "normal");
		Autenticacao aut = new Autenticacao();
		assertEquals("usuario não existe", aut.login(user));
	}
	@Test
	void testC7() {
		Usuario user = new Usuario("email@email.com", "654321", "normal");
		Autenticacao aut = new Autenticacao();
		assertEquals("senha incorreta", aut.login(user));
	}
	@Test
	void testC8() {
		Usuario user = new Usuario("email@email.com", "123456", "admin");
		Autenticacao aut = new Autenticacao();
		assertEquals("logado como admin", aut.login(user));
	}
	void testC9() {
		Usuario user = new Usuario("email@email.com", "123456", "normal");
		Autenticacao aut = new Autenticacao();
		assertEquals("logado", aut.login(user));
	}

}
