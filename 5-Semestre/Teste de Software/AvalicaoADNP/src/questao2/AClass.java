package questao2;

import java.util.ArrayList;

public class AClass {
	private Coder1 coder1;
	private Coder2 coder2;
	private Coder3 coder3;

	public AClass(Coder1 coder1, Coder2 coder2, Coder3 coder3) {
		this.coder1 = coder1;
		this.coder2 = coder2;
		this.coder3 = coder3;
	}

	public String cifrar(ArrayList<String> msg) {
		if (/* 1 */msg == null || /* 2 */msg.size() == 0 || /* 3 */msg.contains("STOP"))
			/* 4 */return "INVALID";
		if (/* 5 */ coder1.m1(msg) && /* 6 */coder2.m2(msg))
			/* 7 */return "C1-C2";
		/* 8 */var count = 0;
		/* 9 */for (String s : msg) {
			/* 10 */if (s.equals("HI"))
				/* 11 */count++;
		}
		/* 12 */if (count >= 2)
			/* 13 */return "2 OR MORE HIs";
		/* 14 */int num = coder3.m3();
		/* 14 */if (num > 1) {
			/* 15 */String ret = "";
			/* 16 */for (int i = 1; i <= num; i++)
				/* 17 */ret += "-" + msg.get(0);
			/* 18 */return ret;
		}
		/* 19 */ return msg.get(0);
	}
}
