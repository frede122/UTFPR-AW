package questao1;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

import java.util.ArrayList;

class testPromocao {

//	@AfterAll
//	static void tearDownAfterClass() throws Exception {
//	}


	
	//1, 3
	@Test
	void testCodNull() {
		ClienteRepo repoMock = mock(ClienteRepo.class);
		when(repoMock.getCliente(anyInt()))
			.thenReturn(new Cliente(1, "Fulano"));
		Resolvedor res = new Resolvedor(repoMock);	
		
		int[] cod = null;
		assertThrows(IllegalArgumentException.class, ()->res.definirPromocao(cod));
	}
	
	//1, 2, 3
	@Test
	void testCodZeo() {
		ClienteRepo repoMock = mock(ClienteRepo.class);
		when(repoMock.getCliente(anyInt()))
			.thenReturn(new Cliente(1, "Fulano"));
		Resolvedor res = new Resolvedor(repoMock);	
		
		int[] cod = new int[0];
		assertThrows(IllegalArgumentException.class, ()->res.definirPromocao(cod));
	}
	
	//1, 2, 4, 5, 6, 7
	@Test
	void testCNullExcpetion() {
		ClienteRepo repoMock = mock(ClienteRepo.class);
		when(repoMock.getCliente(anyInt()))
			.thenReturn(null);
		Resolvedor res = new Resolvedor(repoMock);	
		
		int[] cod = {7};
		assertThrows(Exception.class, ()->res.definirPromocao(cod));
	}
	
	//1, 2, 4, 5, 6, 8, 9, 12, 14
	@Test
	void testDescontoSomentePrimeiroCliente() throws Exception {
		ClienteRepo repoMock = mock(ClienteRepo.class);
		when(repoMock.getCliente(anyInt()))
			.thenReturn(new Cliente(1, "Fulano"));
		Resolvedor res = new Resolvedor(repoMock);	
		
		int[] cod = {1};
		
		ArrayList<Cliente> cli = res.definirPromocao(cod);
		
		assertEquals(10, cli.get(0).getDesconto());
	}
	
	
	//1, 2, 4, 5, 6, 8, 9, 12, 13, 14
	@Test
	void testDescSegundoClienteExiste() throws Exception {
		ClienteRepo repoMock = mock(ClienteRepo.class);
		when(repoMock.getCliente(1))
			.thenReturn(new Cliente(1, "Fulano"));
		when(repoMock.getCliente(2))
			.thenReturn(new Cliente(2, "Ciclano"));
		Resolvedor res = new Resolvedor(repoMock);	
		
		int[] cod = {1,2};
		
		ArrayList<Cliente> cli = res.definirPromocao(cod);
		
		assertEquals(10, cli.get(0).getDesconto());
		assertEquals(7, cli.get(1).getDesconto());
	}
	
	//1, 2, 4, 5, 6, 8, 9, 10, 11, 10, 11, 10, 11, 14
	@Test
	void testDescontoParaTodosClientes() throws Exception {
		ClienteRepo repoMock = mock(ClienteRepo.class);
		when(repoMock.getCliente(1))
			.thenReturn(new Cliente(1, "Fulano"));
		when(repoMock.getCliente(2))
			.thenReturn(new Cliente(2, "Ciclano"));
		when(repoMock.getCliente(3))
			.thenReturn(new Cliente(2, "Tazano"));
		Resolvedor res = new Resolvedor(repoMock);	
		
		int[] cod = {1,2,3};
		
		ArrayList<Cliente> cli = res.definirPromocao(cod);
		
		assertEquals(20, cli.get(0).getDesconto());
		assertEquals(20, cli.get(1).getDesconto());
		assertEquals(20, cli.get(2).getDesconto());
	}

}
