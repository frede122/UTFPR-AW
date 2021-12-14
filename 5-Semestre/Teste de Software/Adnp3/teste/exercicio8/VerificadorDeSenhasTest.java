package exercicio8;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

import java.util.ArrayList;



class VerificadorDeSenhasTest {
	
	VerificadorDeSenhas ver;
	
	@BeforeEach
	void beforeAll() {
		Dicionario dicMock = mock(Dicionario.class);
		ArrayList<String> dic = new ArrayList<String>();
		dic.add("senha");
		dic.add("admin");
		when(dicMock.getListaDeSenhasInvalidas())
			.thenReturn(dic);
		
		ver = new VerificadorDeSenhas(dicMock);
	}


	@Test
	void testSenhaValida() {
		assertTrue(ver.validarNovaSenha("olaola"));
	}
	
	@Test
	void testSenhaMenor5() {
		assertFalse(ver.validarNovaSenha("abc"));
	}
	
	@Test
	void testSenhaMaior10() {
		assertFalse(ver.validarNovaSenha("12345678910"));
	}
	
	@Test
	void testSenhaPrimeiroCharInvalido() {
		assertFalse(ver.validarNovaSenha("?asdsd"));
	}
	@Test
	void testSenhaCaracteresInvalidos() {
		assertFalse(ver.validarNovaSenha("dsd&5$as"));
	}
	
	@Test
	void testSenhaNoDicionario() {
		assertFalse(ver.validarNovaSenha("admin"));
	}
	
	
	@Test
	void testTamLimite5() {
		assertTrue(ver.validarNovaSenha("abcde"));
	}
	
	@Test
	void testTamLimite4() {
		assertFalse(ver.validarNovaSenha("abcd"));
	}
	
	@Test
	void testTamLimite9() {
		assertTrue(ver.validarNovaSenha("abcdefghi"));
	}
	
	@Test
	void testTamLimite10() {
		assertTrue(ver.validarNovaSenha("abcdefghij"));
	}
	
}
