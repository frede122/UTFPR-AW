package exercicio3;

public class MaquinaCafe {
	private int saldo = 0;

	public boolean pedirCafe() {
		if (saldo == 2) {
			saldo = 0; // cafe eh liberado
			return true;
		}
		return false;
	}

	public void adicionarMoeda(int valor) throws Exception {
		if (valor != 1)
			throw new Exception("maquina so aceita um real.");
		if (saldo == 2)
			throw new Exception("maquina nao aceita mais moedas.");

		saldo = saldo + valor;
	}
}