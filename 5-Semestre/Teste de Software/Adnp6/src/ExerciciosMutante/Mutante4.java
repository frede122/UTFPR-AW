package ExerciciosMutante;

public class Mutante4 {
	public float pow(int x, int y) {
		 int pow;
		 if(y >= 0)
		 pow = y;
		 else
		 pow = -y;

		 float res = 1;
		 while(pow > 0) {
		 res = res * x;
		 pow--;
		 }

		 if(y < 0);

		 return res;
		 }
}
