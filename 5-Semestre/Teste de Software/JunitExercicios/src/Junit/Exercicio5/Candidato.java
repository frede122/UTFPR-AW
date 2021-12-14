package Junit.Exercicio5;

public class Candidato {
	char sexo;
	int idade;

	public Candidato(char sexo, int idade) {
		this.sexo = sexo;
		this.idade = idade;
	}

	public char getSexo() {
		return sexo;
	}

	public int getIdade() {
		return idade;
	}

	public void setSexo(char sexo) {
		this.sexo = sexo;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}
}
