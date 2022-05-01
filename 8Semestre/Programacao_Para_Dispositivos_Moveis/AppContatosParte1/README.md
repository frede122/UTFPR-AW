# App Contatos Parte 1
Estudo de caso, aplicativo mobile de contatos consumindo dados de uma [API](https://randomuser.me/) de código aberto que gera dados aleatórios do usuário, parecido com Lorem Ipsum, mas para as pessoas.

## Screenshots
<img src="README/img/Screenshot_1.png" alt="drawing" width="300"/> <img src="README/img/Screenshot_2.png" alt="drawing" width="300"/>

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
| axios | 0.26.1 |
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
