/*
 *  Servidor para aplicacao da Prateleiras Inteligentes.
 */
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h>
#include <sys/fcntl.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>
#include <arpa/inet.h>

#include <openssl/sha.h>
#include <string.h>

#define SERVER_PORT 12345		// Porta do servidor
#define BUF_SIZE	  1024		// Tamanho maximo dos buffers
#define MSG_SUCCESS	"Valor salvo com sucesso! \n hash:"
#define MSG_FAILED	"Nao foi possivel salvar o valor!"

// Funcao para visualizar erros
int fatal(char *str1, char *str2) {
    fprintf(stderr, str1, str2);
    exit(-1);
}

// Funcao que salva o valor no arquivo
int write_value(char *prateleira, char *text) {
  FILE * fp;
  int size;
  fp = fopen("sensores.txt","a");
  if (fp == NULL)
    return(-1);
  size = fprintf(fp,"Prateleira: %s, Valor: %s", prateleira, text);
  fclose(fp);
  return(size);
}

  void getHash512(char *hash, char *mensagem){
    unsigned char *hashTemp = SHA512(mensagem, strlen(mensagem), NULL);
    for(int i=0; i < 64; i++){
      sprintf(hash, "%02x", hashTemp[i]);
    }
  }


// Funcao principal da aplicacao servidor
int main(int argc, char *argv[])
{
  int server_socket, socket_connection, on;
  int writing_success = 0;
  char buffer_input[BUF_SIZE];
  struct sockaddr_in	ip_server;
  struct sockaddr_in ip_client;
  socklen_t slen = sizeof(ip_client);

  memset(&ip_server, 0, sizeof(ip_server));
  ip_server.sin_family = AF_INET;
  ip_server.sin_addr.s_addr = htonl(INADDR_ANY);
  ip_server.sin_port = htons(SERVER_PORT);

  server_socket = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
  if(server_socket < 0)
    fatal("%s: socket() falhou\n", argv[0]);

  setsockopt(server_socket, SOL_SOCKET, SO_REUSEADDR, (char *)&on, sizeof(on));

  if(bind(server_socket, (struct sockaddr *)&ip_server, sizeof(ip_server)) < 0)
    fatal("%s: bind() falhou\n", argv[0]);

  if(listen(server_socket, 3) < 0)
    fatal("%s: listen() falhou\n", argv[0]);



  memset(&buffer_input, 0, sizeof(BUF_SIZE));
  printf("********************************************************\n");
  printf(" Servidor da Prateleiras Inteligentes iniciado com sucesso!\n");
  printf("********************************************************\n\n");
  printf("Por padrao, o servidor ficara rodando indefinidamente. Para encerra-lo entre com CTRL+C.\n\n");
  while(1) {
    printf("Aguardando clientes prateleiras...\n");
    socket_connection = accept(server_socket, (struct sockaddr *)&ip_client, &slen);
    if(socket_connection < 0)
      fatal("%s: accept() falhou\n", argv[0]);

    printf("Cliente conectado: IP %s, Porta %d\n", inet_ntoa(ip_client.sin_addr),ntohs(ip_client.sin_port));
    memset(&buffer_input, 0, sizeof(BUF_SIZE));
    while(strcmp(buffer_input,"-1\n") != 0) {
      read(socket_connection, buffer_input, BUF_SIZE);

      printf("Valor recebido: %s\n", buffer_input);
      if (strcmp(buffer_input,"-1\n") != 0) {
        writing_success = write_value(inet_ntoa(ip_client.sin_addr),buffer_input);
        if (writing_success) {
          // O +1 adicionado ao tamanho considera o byte \0 para indicar o fim da string
          char hashh[64];
          getHash512(hashh, buffer_input);
          char *temp = (char*)malloc(((strlen(MSG_SUCCESS)+1)+strlen(hashh)) * sizeof(char));
          printf("%s", hashh);
          strcpy(temp, MSG_SUCCESS);
          strcat(temp, hashh);
          write(socket_connection, MSG_SUCCESS, strlen(temp)+1);
        }
        else {
          // O +1 adicionado ao tamanho considera o byte \0 para indicar o fim da string
          write(socket_connection, MSG_FAILED, strlen(MSG_FAILED)+1);
        }
      }
    }
    printf("Cliente desconectado: IP %s, Porta %d\n", inet_ntoa(ip_client.sin_addr),ntohs(ip_client.sin_port));
    close(socket_connection);
  }
}
