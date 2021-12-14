package questao6;

import static org.junit.jupiter.api.Assertions.*;

import java.util.concurrent.TimeUnit;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

class testListaDeCompras {

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}


	@Test
	void testA() {
		System.setProperty("webdriver.chrome.driver", "./lib/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		driver.get("https://andreendo.github.io/sample-ui-compras/example.html");
		WebElement produtoInput = driver.findElement(By.name("produto"));
		WebElement qtdInput = driver.findElement(By.name("quantidade"));
		WebElement addProduto = driver.findElement(By.xpath("/html/body/div/div/form/input"));

		
		produtoInput.sendKeys("banana");
		qtdInput.sendKeys("12");
		addProduto.click();
		
		WebElement gerarLista = driver.findElement(By.xpath("/html/body/div/div/div/button"));
		gerarLista.click();
		assertEquals("Lista de compras", driver.findElement(By.tagName("h1")).getText() );
		
		WebElement novaLista = driver.findElement(By.xpath("/html/body/div/div/button"));
		novaLista.click();
		assertEquals("Criar uma lista de compras", driver.findElement(By.tagName("h1")).getText() );
		
		
	}
	
	@Test
	void testB() {
		System.setProperty("webdriver.chrome.driver", "./lib/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		driver.get("https://andreendo.github.io/sample-ui-compras/example.html");
		WebElement produtoInput = driver.findElement(By.name("produto"));
		WebElement qtdInput = driver.findElement(By.name("quantidade"));
		WebElement addProduto = driver.findElement(By.xpath("/html/body/div/div/form/input"));

		
		produtoInput.sendKeys("banana");
		qtdInput.sendKeys("5");
		addProduto.click();
		
		produtoInput.sendKeys("uva");
		qtdInput.sendKeys("7");
		addProduto.click();
		
		produtoInput.sendKeys("batatas");
		qtdInput.sendKeys("4");
		addProduto.click();
		
		produtoInput.sendKeys("carne");
		qtdInput.sendKeys("3");
		addProduto.click();
		
		
		
		driver.findElement(By.id("prod1")).click();
		driver.findElement(By.id("prod2")).click();
		assertTrue(driver.findElement(By.xpath("/html/body/div/div/div/ul/li[1]")).getText().contains("banana"));
		assertTrue(driver.findElement(By.xpath("/html/body/div/div/div/ul/li[1]")).getText().contains("5"));
		
		assertTrue(driver.findElement(By.xpath("/html/body/div/div/div/ul/li[2]")).getText().contains("batatas"));
		assertTrue(driver.findElement(By.xpath("/html/body/div/div/div/ul/li[2]")).getText().contains("4"));

		
	}
	
	@Test
	void testC() {
		System.setProperty("webdriver.chrome.driver", "./lib/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.get("https://andreendo.github.io/sample-ui-compras/example.html");
		WebElement produtoInput = driver.findElement(By.name("produto"));
		WebElement qtdInput = driver.findElement(By.name("quantidade"));
		WebElement addProduto = driver.findElement(By.xpath("/html/body/div/div/form/input"));
		
		
		produtoInput.sendKeys("banana");
		qtdInput.sendKeys("5");
		addProduto.click();
		
		produtoInput.sendKeys("uva");
		qtdInput.sendKeys("7");
		addProduto.click();
		
		produtoInput.sendKeys("batatas");
		qtdInput.sendKeys("4");
		addProduto.click();
		
		WebElement gerarLista = driver.findElement(By.xpath("/html/body/div/div/div/button"));
		gerarLista.click();
		
		assertEquals("3 itens a comprar", driver.findElement(By.tagName("h2")).getText() );
		
		driver.findElement(By.id("uva:7")).click();
		
		assertTrue(driver.findElement(By.id("uva:7")).isSelected());
		
	}
}
