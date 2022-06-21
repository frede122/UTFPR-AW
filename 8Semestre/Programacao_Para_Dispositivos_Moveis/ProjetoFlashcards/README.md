# Projeto Flashcard - Mind Booster
Projeto mobile, aplicativo de flashcards. **Flashcards** são cartões utilizados para a memorização. Cada cartão possui dois lados. Um lado contém uma pergunta e o outro, a resposta. Geralmente, os flashcards são organizados em coleções de diferentes assuntos.

## Especificação do Projeto Parte 1

Para usar um flashcard, sugere-se seguir os seguintes passos:

1. Ler a pergunta (contida na frente do cartão);
2. Responder a pergunta. A resposta pode ser escrita, verbal ou mental;
3. Vire o cartão para verificar se a resposta está correta;
4. Caso tenha acertado, coloque a carta em uma pilha de acertos. Caso tenha errado, coloque a carta em uma pilha de erros;
5. Ao finalizar os cartões, contabilize quantos acertos e erros houveram. Após uma pausa de aproximadamente 30 minutos, se avalie novamente..

### Critérios Avaliativos
* [x] Critério 1 (1,5) – Elaboração de todas as telas do aplicativo.
* [x] Critério 2 (1,5) – Criação de componentes para: 
    * [x] cartão para representar uma coleção 
    * [x] cartão para representar um flashcard
    * [x] cartão da interface de cadastro de flashcard;
* [x] Critério 3 (1,0) – Interação com cliques de cada componente e navegação entre telas.
* [x] Critério 4 (1,0) – Barra lateral de navegação (*DrawerNavigator*).
* [x] Critério 5 (1,0) – Cadastro de usuário utilizando *Firebase Authentication*.
* [x] Critério 6 (1,0) – Login de usuário usando o *Firebase Authentication*. 
    * [x] Caso o login seja válido, deve-se redirecionar para a tela “*Minhas coleções*”.
* [x] Critério 7 (1,0) – Dados devem ser inicializados diretamente no *código-fonte* ou carregados a partir de um arquivo *JSON*.
* [x] Critério 8 (1,0) – A paleta de cores aplicada no aplicativo segue o esquema de cores do protótipo.
* [x] Critério 9 (0,5) – (*Tela de cadastro de usuário*) – Caso o valor digitado no campo “*Senha*” for diferente do campo “*Repetir senha*”, deve-se mostrar um rótulo “***Senha não confere***” em cor vermelha logo abaixo do campo “*Repetir senha*”
* [x] Critério 10 (0,5) – (*Tela de login*) – Caso o e-mail não for válido, exibir o rótulo de mensagem (em vermelho) "***E-mail inválido***" logo abaixo do campo de texto "*E-mail*".

## Especificação do Projeto Parte 2
Tendo em vista essa regra de negócio e a implementação do Projeto (Parte 1) do aplicativo móvel de flashcards (utilizando React-native), implemente a persistência de dados utilizando Firebase e REDUX para manter o estado dos dados das telas.

### Critérios Avaliativos
* [x] Critério 1 (0,8) – Recuperação e apresentação da lista de coleções do banco de dados.
* [x] Critério 2 (0,8) – Persistência do cadastro de uma nova coleção em banco de dados.
* [x] Critério 3 (0,8) – Alteração de uma coleção existente no banco de dados.
* [x] Critério 4 (0,8) – Exclusão de uma coleção no banco de dados.
* [x] Critério 5 (0,8) – Recuperação e apresentação da lista de flashcards de uma coleção.
* [x] Critério 6 (0,8) – Persistência do cadastro de um novo flashcard em banco de dados.
* [x] Critério 7 (0,8) – Alteração de uma flashcard existente no banco de dados.
* [x] Critério 8 (0,8) – Exclusão de flashcard no banco de dados.
* [x] Critério 9 (1,5) – Barra para filtragem de elementos. 
   * [x] Deve-se apresentar somente os flashcards que contêm o termo (frente ou verso) inserido na barra.
* [ ] Critério 10 (0,6) – Uso do REDUX para manter o estado das coleções e cartões.
* [x] Critério 11 (1,5) – Carregamento dos flashcards no jogo com a opção virar conforme no protótipo.

## Screenshots

## Frameworks

| Nome | Versão
|---| ---|
| react-native | 0.68.0 |

## Dependências
* Node
* OpenJDK 11
* Android SDK

### Instalando Dependências
Para instalar as dependências baixe o [Chocolaty](https://chocolatey.org/) e execute o comando:
```
choco install -y nodejs-lts openjdk11
```
Após instalado Node e OpenJDK via choco, instale o [Android SDK](https://developer.android.com/studio) via instalador e depois configure as variaveis de ambiente

Abra o Painel de Controle

Clique em conta de usuários, depois clique contas de usuários novamente.

Clique em alterar variaveis de ambiente

Clique em novo, crie uma entrada com nome:
```
ANDROID_HOME 
```
E no campo valor coloque:
```
%LOCALAPPDATA%\Android\Sdk
```
Vá novamente nas variaveis de ambiente, so que dessa vez procure por Path, clique em editar

Clique em novo e adicione: 
```
%LOCALAPPDATA%\Android\Sdk\platform-tools
```

## Dependências JS

| Dependência | Versão
|---| ---|
| react-native-material/core | 1.3.7 |
| react | 17.0.2 |
| react-navigation/native | 6.0.10 |
| react-navigation/stack | 6.2.1 |
| react-native-gesture-handler | 2.4.0 |

### Instalando Dependências JS

```
npm install
```

## Executando o APP

Para executar o APP em emulador ou smartphone android, use o comando:

```
npx react-native run-android
```
Ou para executar em um sistema IOS use:
```
npx react-native run-ios
```
