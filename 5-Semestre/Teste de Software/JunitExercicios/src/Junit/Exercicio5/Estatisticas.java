package Junit.Exercicio5;

public class Estatisticas {
	int mulheres, homens;
	float idadeMedia;
	String contexto;

	public Estatisticas(int m, int h, float i, String c) {
		this.mulheres = m;
		this.homens = h;
		this.idadeMedia = i;
		this.contexto = c;
	}

	public int getMulheres() {
		return mulheres;
	}

	public void setMulheres(int mulheres) {
		this.mulheres = mulheres;
	}

	public int getHomens() {
		return homens;
	}

	public void setHomens(int homens) {
		this.homens = homens;
	}

	public float getIdadeMedia() {
		return idadeMedia;
	}

	public void setIdadeMedia(float idadeMedia) {
		this.idadeMedia = idadeMedia;
	}

	public String getContexto() {
		return contexto;
	}

	public void setContexto(String contexto) {
		this.contexto = contexto;
	}
	
}
