package questao2;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

import java.util.ArrayList;

class testCifrar {

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	// 1, 4
	@Test
	void testCifraInvalidaNull() {
		Coder1 coder1Mock = mock(Coder1.class);
		when(coder1Mock.m1(any()))
			.thenReturn(true);
		Coder2 coder2Mock = mock(Coder2.class);
		when(coder2Mock.m2(any()))
			.thenReturn(true);
		Coder3 coder3Mock = mock(Coder3.class);
		when(coder3Mock.m3())
			.thenReturn(5);
		
		AClass ac = new AClass(coder1Mock, coder2Mock, coder3Mock);
		assertEquals("INVALID", ac.cifrar(null));
	}
	
	
	//1, 2, 4
	@Test
	void testCifraInvalidaSize0() {
		Coder1 coder1Mock = mock(Coder1.class);
		when(coder1Mock.m1(any()))
			.thenReturn(true);
		Coder2 coder2Mock = mock(Coder2.class);
		when(coder2Mock.m2(any()))
			.thenReturn(true);
		Coder3 coder3Mock = mock(Coder3.class);
		when(coder3Mock.m3())
			.thenReturn(5);
		
		AClass ac = new AClass(coder1Mock, coder2Mock, coder3Mock);
		ArrayList<String> msg = new ArrayList<String>();
		assertEquals("INVALID", ac.cifrar(msg));
	}
	
	//1, 2, 3, 4
	@Test
	void testCifraInvalidaStop() {
		Coder1 coder1Mock = mock(Coder1.class);
		when(coder1Mock.m1(any()))
			.thenReturn(true);
		Coder2 coder2Mock = mock(Coder2.class);
		when(coder2Mock.m2(any()))
			.thenReturn(true);
		Coder3 coder3Mock = mock(Coder3.class);
		when(coder3Mock.m3())
			.thenReturn(5);
		
		AClass ac = new AClass(coder1Mock, coder2Mock, coder3Mock);
		ArrayList<String> msg = new ArrayList<String>();
		msg.add("STOP");
		assertEquals("INVALID", ac.cifrar(msg));
	}
	
	//1, 2, 3, 5, 6, 7
	@Test
	void testReturnC1C2() {
		Coder1 coder1Mock = mock(Coder1.class);
		when(coder1Mock.m1(any()))
			.thenReturn(true);
		Coder2 coder2Mock = mock(Coder2.class);
		when(coder2Mock.m2(any()))
			.thenReturn(true);
		
		Coder3 coder3Mock = mock(Coder3.class);
		when(coder3Mock.m3())
			.thenReturn(5);
		
		AClass ac = new AClass(coder1Mock, coder2Mock, coder3Mock);
		ArrayList<String> msg = new ArrayList<String>();
		msg.add("abc");
		assertEquals("C1-C2", ac.cifrar(msg));
		
	}

	//1, 2, 3, 5, 8, 9, 10, 11, 9, 10, 11, 9, 10, 11, 12, 13
	@Test
	void testReturn2OrMore() {
		Coder1 coder1Mock = mock(Coder1.class);
		when(coder1Mock.m1(any()))
			.thenReturn(false);
		Coder2 coder2Mock = mock(Coder2.class);
		when(coder2Mock.m2(any()))
			.thenReturn(false);
		
		Coder3 coder3Mock = mock(Coder3.class);
		when(coder3Mock.m3())
			.thenReturn(5);
		
		AClass ac = new AClass(coder1Mock, coder2Mock, coder3Mock);
		ArrayList<String> msg = new ArrayList<String>();
		msg.add("HI");
		msg.add("HI");
		msg.add("HI");
		msg.add("No");
		assertEquals("2 OR MORE HIs", ac.cifrar(msg));
		
	}
	
	
	//1, 2, 3, 5, 8, 9, 10,  9, 10,  9, 10,  9, 10, 12, 14, 15, 16, 17, 16, 17, 18
	@Test
	void testReturn2Item() {
		Coder1 coder1Mock = mock(Coder1.class);
		when(coder1Mock.m1(any()))
			.thenReturn(false);
		Coder2 coder2Mock = mock(Coder2.class);
		when(coder2Mock.m2(any()))
			.thenReturn(false);
		
		Coder3 coder3Mock = mock(Coder3.class);
		when(coder3Mock.m3())
			.thenReturn(2);
		
		AClass ac = new AClass(coder1Mock, coder2Mock, coder3Mock);
		ArrayList<String> msg = new ArrayList<String>();
		msg.add("Teste1");
		msg.add("Teste2");
		msg.add("Teste3");
		msg.add("No");
		assertEquals("-Teste1-Teste1", ac.cifrar(msg));
		
	}

	//1, 2, 3, 5, 8, 9, 10,  9, 10,  9, 10,  9, 10, 12, 14, 19
	@Test
	void testReturn1Item() {
		Coder1 coder1Mock = mock(Coder1.class);
		when(coder1Mock.m1(any()))
			.thenReturn(false);
		Coder2 coder2Mock = mock(Coder2.class);
		when(coder2Mock.m2(any()))
			.thenReturn(false);
		
		Coder3 coder3Mock = mock(Coder3.class);
		when(coder3Mock.m3())
			.thenReturn(1);
		
		AClass ac = new AClass(coder1Mock, coder2Mock, coder3Mock);
		ArrayList<String> msg = new ArrayList<String>();
		msg.add("Teste1");
		msg.add("Teste2");
		msg.add("Teste3");
		msg.add("No");
		assertEquals("Teste1", ac.cifrar(msg));
		
	}
}
