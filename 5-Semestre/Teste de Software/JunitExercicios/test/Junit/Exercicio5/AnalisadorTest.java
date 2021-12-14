package Junit.Exercicio5;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;

class AnalisadorTest {

	@Test
	void testLancarExcecaoListaVazia() {
		
		Analisador analisador = new Analisador();
		ArrayList<Candidato> candidatos = new  ArrayList<Candidato>();
		assertThrows(Exception.class, ()->{
			analisador.analisar(candidatos);
		});
		
	}
	
	@Test
	void testContextoPolarizada() throws Exception {
		
		Analisador analisador = new Analisador();
		ArrayList<Candidato> candidatos = new  ArrayList<Candidato>();
		candidatos.add(new  Candidato('F', 30));
		candidatos.add(new  Candidato('M', 40));
		Estatisticas e = analisador.analisar(candidatos);
		
		assertEquals(1, e.getMulheres());
		assertEquals(1, e.getHomens());
		assertEquals(35, e.getIdadeMedia(), 0.01);
		assertEquals("polarizada", e.getContexto());
	
	}
	
	@Test
	void testContextoNormal() throws Exception {
		
		Analisador analisador = new Analisador();
		ArrayList<Candidato> candidatos = new  ArrayList<Candidato>();
		candidatos.add(new  Candidato('F', 50));
		candidatos.add(new  Candidato('M', 40));
		candidatos.add(new  Candidato('F', 42));
		candidatos.add(new  Candidato('M', 48));
		Estatisticas e = analisador.analisar(candidatos);
		assertEquals(2, e.getMulheres());
		assertEquals(2, e.getHomens());
		assertEquals(45, e.getIdadeMedia(), 0.01);
		assertEquals("normal", e.getContexto());	
	}
	@Test
	void testContextoSemConcorrencia() throws Exception {
		
		Analisador analisador = new Analisador();
		ArrayList<Candidato> candidatos = new  ArrayList<Candidato>();
		candidatos.add(new  Candidato('F', 50));
		Estatisticas e = analisador.analisar(candidatos);
		assertEquals(1, e.getMulheres());
		assertEquals(0, e.getHomens());
		assertEquals(50, e.getIdadeMedia(), 0.01);
		assertEquals("sem concorrencia", e.getContexto());	
	}
	@Test
	void testMaisCandidatosMulheres() throws Exception {
		
		Analisador analisador = new Analisador();
		ArrayList<Candidato> candidatos = new  ArrayList<Candidato>();
		candidatos.add(new  Candidato('F', 50));
		candidatos.add(new  Candidato('F', 50));
		candidatos.add(new  Candidato('M', 40));
		candidatos.add(new  Candidato('F', 42));
		candidatos.add(new  Candidato('M', 48));
		Estatisticas e = analisador.analisar(candidatos);
		assertEquals(3, e.getMulheres());
		assertEquals(2, e.getHomens());
		assertEquals(46, e.getIdadeMedia(), 0.01);
		assertEquals("normal", e.getContexto());	
	}

}
