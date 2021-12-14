package Mockito.Exercicio7;

public class Turma {
	String codDisciplina, codTurma;
	int maximoAlunos;
	
	public Turma(String codDisciplina, String codTurma, int maximoAlunos) {
		this.codDisciplina = codDisciplina;
		this.codTurma = codTurma;
		this.maximoAlunos = maximoAlunos;
	}
	public String getCodDisciplina() {
		return codDisciplina;
	}
	public void setCodDisciplina(String codDisciplina) {
		this.codDisciplina = codDisciplina;
	}
	public String getCodTurma() {
		return codTurma;
	}
	public void setCodTurma(String codTurma) {
		this.codTurma = codTurma;
	}
	public int getMaximoAlunos() {
		return maximoAlunos;
	}
	public void setMaximoAlunos(int maximoAlunos) {
		this.maximoAlunos = maximoAlunos;
	}
}
