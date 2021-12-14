package questao1;

import java.util.ArrayList;

public class Resolvedor {
	private ClienteRepo repo;

	public Resolvedor(ClienteRepo repo) {
		this.repo = repo;
	}

	public ArrayList<Cliente> definirPromocao(int[] cods) throws Exception {
		if (/* 1 */cods == null || /* 2 */cods.length == 0)
			/* 3 */throw new IllegalArgumentException("sem codigo");
		/* 4 */var clientes = new ArrayList<Cliente>();
		/* 5 */for (int cod : cods) {
			/* 6 */Cliente c = repo.getCliente(cod);
			/* 6 */if (c == null)
				/* 7 */throw new Exception("Codigo do cliente invalido");
			/* 8 */clientes.add(c);
		}
		/* 9 */var resposta = new ArrayList<Cliente>();
		/* 9 */if (clientes.size() >= 3) {
// todos ganham 20% de desconto
			/* 10 */for (Cliente c : clientes) {
				/* 11 */c.setDesconto(20);
				/* 11 */resposta.add(c);
			}
		} /* 12 */else {
// o 1º cliente ganha 10%
			/* 12 */clientes.get(0).setDesconto(10);
			/* 12 */resposta.add(clientes.get(0));
//e, se existir, o 2º ganha 7%
			/* 12 */if (clientes.size() > 1) {
				/* 13 */clientes.get(1).setDesconto(7);
				/* 13 */resposta.add(clientes.get(1));
			}
		}
		/* 14 */return resposta;
	}
}
