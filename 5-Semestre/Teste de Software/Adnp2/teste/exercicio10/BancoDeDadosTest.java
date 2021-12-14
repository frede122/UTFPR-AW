package exercicio10;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class BancoDeDadosTest {

	BancoDeDados bd;
	@BeforeEach
	void beforeAll() {
		VerificadorDeCodigos vMock = mock(VerificadorDeCodigos.class);
		when(vMock.verificarCodigoDisciplina("IF55S"))
			.thenReturn(true);
		when(vMock.verificarCodigoTurma("ES66"))
			.thenReturn(true);
		
		bd =  new BancoDeDados(vMock);
		
	}
	
	@Test
	void testSucesso() {
		
		String res = bd.cadastrarTurma("IF55S", "ES66", 27);
		assertEquals("sucesso", res);
	}
	
	@Test
	void testDisciplinaInvalida() {
		String res = bd.cadastrarTurma("IF6$$", "ES66", 27);
		assertEquals("Codigo de disciplina invalido", res);
	}
	
	
	@Test
	void testTurmaInvalida() {
		String res = bd.cadastrarTurma("IF55S", "4555", 27);
		assertEquals("Codigo de turma invalido", res);
	}
	
	
	
	@Test
	void testQtdAlunosInvalidoMenor() {
		String res = bd.cadastrarTurma("IF55S", "ES66", 2);
		assertEquals("Numero alunos invalido", res);
	}
	
	@Test
	void testQtdAlunosInvalidoMaior() {
		String res = bd.cadastrarTurma("IF55S", "ES66", 56);
		assertEquals("Numero alunos invalido", res);
	}
	
}
