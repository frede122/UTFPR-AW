package Mockito.Exercicio1;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;

class PessoaTest {

	@Test
	void testPessoaExiste() {
	    ArrayList<Pessoa> pessoas = new ArrayList<Pessoa>();
	    Pessoa p = new Pessoa();
	    p.setCodigo(1);
	    p.setIdade(22);
	    p.setNome("Joao");
	    pessoas.add(p);
		RHService rhserviceMockito = mock(RHService.class);
		when(rhserviceMockito.getAllPessoas())
			.thenReturn(pessoas);
		
		PessoaDAO pessoaDAO = new PessoaDAO(rhserviceMockito);
		assertTrue(pessoaDAO.existePessoa("Joao"));
		verify(rhserviceMockito).getAllPessoas(); 
	}
	
	@Test
	void testPessoaNaoExiste() {
	    ArrayList<Pessoa> pessoas = new ArrayList<Pessoa>();
	    Pessoa p = new Pessoa();
	    p.setCodigo(1);
	    p.setIdade(22);
	    p.setNome("Maria");
	    pessoas.add(p);
		RHService rhserviceMockito = mock(RHService.class);
		when(rhserviceMockito.getAllPessoas())
			.thenReturn(pessoas);
		
		PessoaDAO pessoaDAO = new PessoaDAO(rhserviceMockito);
		assertFalse(pessoaDAO.existePessoa("Joao"));
		verify(rhserviceMockito).getAllPessoas(); 
	}



}
