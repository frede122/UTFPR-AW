package Mockito.Exercicio7;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

import Mockito.Exercicio7.Turma;
import Mockito.Exercicio7.TurmaController;
import Mockito.Exercicio7.TurmaDAO;
import Mockito.Exercicio7.VerificadorDeCodigos;

class TurmaControllerTest {

	
	@Test
	void testTurmaCodigoDisciplinaInvalido() {
		VerificadorDeCodigos verificadorMock = mock(VerificadorDeCodigos.class);
		when(verificadorMock.verificarCodigoDisciplina("IF66J"))
		.thenReturn(true);
		
		TurmaDAO turmaDAOMock = mock(TurmaDAO.class);
		
		TurmaController controller = new TurmaController(turmaDAOMock);
		controller.setVerificador(verificadorMock);
		
		Turma turma = new Turma("IF66", "ES51", 44);
		String resultado = controller.cadastrarTurma(turma);
		assertEquals("codigo disciplina invalido", resultado);
		
	}
	@Test
	void testTurmaCodigoTurmaInvalido() {
		VerificadorDeCodigos verificadorMock = mock(VerificadorDeCodigos.class);
		when(verificadorMock.verificarCodigoDisciplina("IF66J"))
		.thenReturn(true);
		when(verificadorMock.verificarCodigoTurma("ES51"))
		.thenReturn(true);
		
		TurmaDAO turmaDAOMock = mock(TurmaDAO.class);
		
		TurmaController controller = new TurmaController(turmaDAOMock);
		controller.setVerificador(verificadorMock);
		
		Turma turma = new Turma("IF66J", "ES52", 44);
		String resultado = controller.cadastrarTurma(turma);
		assertEquals("codigo turma invalido", resultado);
		
	}

	@Test
	void testTurmaExiste() {
		VerificadorDeCodigos verificadorMock = mock(VerificadorDeCodigos.class);
		when(verificadorMock.verificarCodigoDisciplina("IF66J"))
		.thenReturn(true);
		when(verificadorMock.verificarCodigoTurma("ES51"))
		.thenReturn(true);
		
		TurmaDAO turmaDAOMock = mock(TurmaDAO.class);
		when(turmaDAOMock.existe(any()))
		.thenReturn(true);

		
		TurmaController controller = new TurmaController(turmaDAOMock);
		controller.setVerificador(verificadorMock);
		
		Turma turma = new Turma("IF66J", "ES51", 44);
		String resultado = controller.cadastrarTurma(turma);
		assertEquals("turma ja existe", resultado);
		
	}
	
	@Test
	void testTurmaSalvaComSucesso() {
		VerificadorDeCodigos verificadorMock = mock(VerificadorDeCodigos.class);
		when(verificadorMock.verificarCodigoDisciplina("IF66J"))
		.thenReturn(true);
		when(verificadorMock.verificarCodigoTurma("ES51"))
		.thenReturn(true);
		
		TurmaDAO turmaDAOMock = mock(TurmaDAO.class);
		when(turmaDAOMock.existe(any()))
		.thenReturn(false);
		when(turmaDAOMock.salvar(any()))
		.thenReturn(true);
		
		TurmaController controller = new TurmaController(turmaDAOMock);
		controller.setVerificador(verificadorMock);
		
		Turma turma = new Turma("IF66J", "ES51", 44);
		String resultado = controller.cadastrarTurma(turma);
		assertEquals("turma salva com sucesso", resultado);
		
	}
	@Test
	void testTurmaNaoSalva() {
		VerificadorDeCodigos verificadorMock = mock(VerificadorDeCodigos.class);
		when(verificadorMock.verificarCodigoDisciplina("IF66J"))
		.thenReturn(true);
		when(verificadorMock.verificarCodigoTurma("ES51"))
		.thenReturn(true);
		
		TurmaDAO turmaDAOMock = mock(TurmaDAO.class);
		when(turmaDAOMock.existe(any()))
		.thenReturn(false);
		when(turmaDAOMock.salvar(any()))
		.thenReturn(false);
		
		TurmaController controller = new TurmaController(turmaDAOMock);
		controller.setVerificador(verificadorMock);
		
		Turma turma = new Turma("IF66J", "ES51", 44);
		String resultado = controller.cadastrarTurma(turma);
		assertEquals("turma nao salva. Erro no BD", resultado);
		
	}
	
}
