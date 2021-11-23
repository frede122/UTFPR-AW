/*
 *  Cliente para aplicacao da Prateleiras Inteligentes.
 */
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>

#include <openssl/sha.h>
#include <string.h>

#define SERVER_PORT 12345 // Porta do servidor
#define BUF_SIZE	  1024  // Tamanho maximo dos buffers

// Funcao para visualizar erros
int fatal(char *str1, char *str2) {
  fprintf(stderr, str1, str2);
  exit(-1);
}


void sha512_string(char *string, char *outputBuffer)
{
    unsigned char hash[SHA512_DIGEST_LENGTH];
    SHA512_CTX sha512;
    SHA512_Init(&sha512);
    SHA512_Update(&sha512, string, strlen(string));
    SHA512_Final(hash, &sha512);
    for(int i = 0; i < SHA512_DIGEST_LENGTH; i++)
    {
        sprintf(outputBuffer + (i * 2), "%02x", hash[i]);
    }
    outputBuffer[strlen(outputBuffer)] = 0;
}


// Funcao principal da aplicacao cliente
int main(int argc, char *argv[]) {
  int socket_client;
  char buffer_input[BUF_SIZE];
  char buffer_output[BUF_SIZE];
  struct hostent *server_address;
  struct sockaddr_in ip_server;

  if(argc < 2)
    fatal("Para usar: %s <IP-servidor>\n", argv[0]);

  // Retorna o endereco IP do servidor
  server_address = gethostbyname(argv[1]);
  if(!server_address)
    fatal("%s: gethostbyname() falhou\n", argv[0]);

  socket_client = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP);
  if(socket_client < 0)
    fatal("%s: socket() falhou\n", argv[0]);

  memset(&ip_server, 0, sizeof(ip_server));
  ip_server.sin_family = AF_INET;
  memcpy(&ip_server.sin_addr.s_addr, server_address->h_addr, server_address->h_length);
  ip_server.sin_port = htons(SERVER_PORT);

  if(connect(socket_client, (struct sockaddr *)&ip_server, sizeof(ip_server)) < 0) {
    fatal("%s: connect() falhou\n", argv[0]);
  }
  else {
    memset(&buffer_input, 0, sizeof(BUF_SIZE));
    memset(&buffer_output, 0, sizeof(BUF_SIZE));
    printf("********************************************************\n");
    printf(" Bem-vindo a aplicacao da Prateleiras Inteligentes!\n");
    printf("********************************************************\n\n");
    while(strcmp(buffer_input,"-1\n") != 0) {
      printf(" Entre com um valor entre 0 e 255 para representar o valor do sensor a ser enviado para o servidor ou com o valor -1 para encerrar a aplicacao:\n");
      fgets(buffer_input, BUF_SIZE, stdin);
      char hashTemp[129];
      sha512_string(buffer_input, hashTemp);
      if (strcmp(buffer_input,"-1\n") != 0) {
        // O +1 adicionado ao tamanho considera o byte \0 para indicar o fim da string
        write(socket_client, hashTemp, (strlen(hashTemp) + 1));

        // printf("\n hash %s ", hashTemp);
        read(socket_client, buffer_output, BUF_SIZE);
        printf("\n Resposta do servidor: Hash recebido - %s\n", buffer_output);

        write(socket_client, buffer_input, (strlen(buffer_input) + 1));
        read(socket_client, buffer_output, BUF_SIZE);
        printf(" Resposta do servidor: Hash computado - %s\n", buffer_output);
      }
    }
  }
  close(socket_client);
  printf("\n********************************************************\n");
  printf(" Aplicacao encerrada. Ate mais!\n");
  printf("********************************************************\n\n");
}
