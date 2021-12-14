package exercicio16;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class MontanhaRussaControladorTest {

	MontanhaRussaControlador mont;
	@BeforeEach
	void beforeAll() {
		ClienteDao cli = mock(ClienteDao.class);
		when(cli.ehCliente("Frede Mandu"))
			.thenReturn(true);
		
		mont = new MontanhaRussaControlador(cli);
	}
	
	@Test
	void testAutorizado() {
		String res;
		try {
			res = mont.autorizar("Frede Mandu", 29);
		} catch (Exception e) {
			res = "";
			e.printStackTrace();
		}
		assertEquals("autorizado", res);
	}
	
	@Test
	void testExceptionCharInvalido() {
		
		assertThrows(Exception.class, ()->{
			mont.autorizar("%Liss Moreira", 29);
		});
		
	}
		
	
	@Test
	void testExceptionQtdPalavrasInsuficiente() {
		
		assertThrows(Exception.class, ()->{
			mont.autorizar("Liss", 29);
		});
	}
		
	
	
	@Test
	void testExceptionIdadeMenorQue1() {
		
		assertThrows(Exception.class, ()->{
			mont.autorizar("Frede Mandu", -5);
		});
	}
		
	@Test
	void testExceptionIdadeMaiorQue120() {
		
		assertThrows(Exception.class, ()->{
			mont.autorizar("Frede Mandu", 130);
		});
	}
		
	@Test
	void testAcompanhandoDosPais() {
		String res;
		try {
			res = mont.autorizar("Frede Mandu", 17);
		} catch (Exception e) {
			res = "";
			e.printStackTrace();
		}
		assertEquals("acompanhado dos pais", res);
	}
	
	@Test
	void testAcompanhandoDoResonsavel() {
		String res;
		try {
			res = mont.autorizar("Frede Mandu", 100);
		} catch (Exception e) {
			res = "";
			e.printStackTrace();
		}
		assertEquals("acompanhado do responsavel legal", res);
	}
	
	
	
}
