# Minha Dieta ( React App )  :apple: :rice:  :meat_on_bone:
Aplicativo Web para criação de cardapios para dieta de pacientes.

## Especificação do Projeto
Estudo de caso, aplicativo Web implementado com React-JS para controle de dieta, fazendo a persistência de dados utilizando Firebase

### Critérios
* [x] Utilizar Firebase como persistência.
* [x] Utilizar REDUX.
* [x] Criar tela de Login.
* [x] Criar cadastrado de usuários.
* [x] Criar tela para redefinir senha.
* [x] Criar cadastro de itens.
* [x] Permitir alteração e exclusão de itens.

## Screenshots
### Login
![Imagem do Login](README/Screenshot_1.PNG)

### Tela Inicial Paciente
![Imagem do Tela Inicial Paciente](README/Screenshot_2.PNG)
![Imagem do Tela Inicial Paciente](README/Screenshot_3.PNG)

### Tela Cadastro Paciente
<img src="README/Screenshot_4.PNG" alt="drawing" width="350"/> 
<img src="README/Screenshot_5.PNG" alt="drawing" width="600"/> 

### Telas Cadastro de Alimentos e Cardapios
<img src="README/Screenshot_6.PNG" alt="drawing" width="550"/> 
<img src="README/Screenshot_7.PNG" alt="drawing" width="400"/> 

## Dependências
* NodeJS
* npm

## Dependências JS

| Dependência | Versão
|---| ---|
| react | ^17.0.2 |
| react-dom | ^7.2.4 |
| eact-router-dom | ^5.2.0 |
| react-scripts | 4.0.3 |
| redux | ^4.1.0 |
| redux-persist | ^6.0.0 |
| firebase | ^8.5.0 |


### Instalando Dependências JS

```
npm install
```

## Executando a Aplicação

Para executar o APP Web em modo desenvolvedor, use o comando:

```
npm start
```
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

## Criando Build da Aplicação
Para criar um `build` do APP Web, use o comando:

```
npm run build
```
Esse comando compila o aplicativo para produção, disponibilizando-o na pasta `build`.\
Com a compilação o tamanho da aplicação é reduzida e os nomes dos arquivos incluem os `hashes`.\
Após compilado, estará pronto para ser feito o `Deploy` da aplicação!.\

Veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.
