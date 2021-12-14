package questao3;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class testConsultarSitu {

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	CartorioEleitoral ceMock;
	VerificadorEleitoral ve;
	@BeforeEach
	void beforeEach() {
		ceMock = mock(CartorioEleitoral.class);
		when(ceMock.verificar("78987654321"))
			.thenReturn("nao existe");
		when(ceMock.verificar("78987654320"))
			.thenReturn("pendencia");
		when(ceMock.verificar("12345678987"))
			.thenReturn("OK");
		ve = new VerificadorEleitoral(ceMock);
	}
	
	@Test
	void testCpfInvalidoExceptionMenor() {
		assertThrows(Exception.class, ()-> ve.consultarSituacao(53, "123456"));
	}
	@Test
	void testCpfInvalidoExceptionMaior() {
		assertThrows(Exception.class, ()-> ve.consultarSituacao(53, "1234567891011"));
	}
	@Test
	void testIdadeInvalidoExceptionMenor() {
		assertThrows(Exception.class, ()-> ve.consultarSituacao(-11, "12345678987"));
	}
	@Test
	void testIdadeInvalidoExceptionMaior() {
		assertThrows(Exception.class, ()-> ve.consultarSituacao(235, "12345678987"));
	}
	
	
	@Test
	void testIdadeMenor16() throws Exception {
		assertEquals("nao pode votar", ve.consultarSituacao(15, "12345678987"));
	}
	@Test
	void testTituloNaoEncontrado() throws Exception {
		assertEquals("faca um titulo", ve.consultarSituacao(18, "78987654321"));
	}
	@Test
	void testTituloComPendencia() throws Exception {
		assertEquals("regularize seu titulo", ve.consultarSituacao(53, "78987654320"));
	}
	@Test
	void testIdadeVotoFacultativo() throws Exception {
		assertEquals("voto facultativo", ve.consultarSituacao(75, "12345678987"));
	}
	@Test
	void testIdadeVotoObrigatorio() throws Exception {
		assertEquals("voto obrigatorio", ve.consultarSituacao(75, "12345678987"));
	}
	
	
	
	// Testes de valores limite
	
	@Test
	void testVlrLimiteIdadeMenorM01() {
		assertThrows(Exception.class, ()-> ve.consultarSituacao(-1, "12345678987"));
	}
	@Test
	void testVlrLimiteIdadeMenor00() {
		assertThrows(Exception.class, ()-> ve.consultarSituacao(0, "12345678987"));
	}
	@Test
	void testVlrLimiteIdadeMenor01() throws Exception {
		assertEquals("nao pode votar", ve.consultarSituacao(1, "12345678987"));
	}
	@Test
	void testVlrLimiteIdadeMenor02() throws Exception {
		assertEquals("nao pode votar", ve.consultarSituacao(2, "12345678987"));
	}
	@Test
	void testVlrLimiteIdadeMaior200() {
		assertThrows(Exception.class, ()-> ve.consultarSituacao(200, "12345678987"));
	}
	@Test
	void testVlrLimiteIdadeMaior201() {
		assertThrows(Exception.class, ()-> ve.consultarSituacao(201, "12345678987"));
	}
	@Test
	void testVlrLimiteIdadeMaior198() throws Exception {
		assertEquals("voto facultativo", ve.consultarSituacao(198, "12345678987"));
	}
	@Test
	void testVlrLimiteIdadeMaior199() throws Exception {
		assertEquals("voto facultativo", ve.consultarSituacao(199, "12345678987"));
	}
	
	
	@Test
	void testVlrLimiteCpf10() {
		assertThrows(Exception.class, ()-> ve.consultarSituacao(53, "1234567898"));
	}
	
	// Teste Limite 11 ja implementado la em cima
	@Test
	void testVlrLimiteCpf12() {
		assertThrows(Exception.class, ()-> ve.consultarSituacao(53, "123456789876"));
	}

}
