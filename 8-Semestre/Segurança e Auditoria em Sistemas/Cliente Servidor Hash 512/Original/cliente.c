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

#include <time.h>
#include <stdint.h>

#define SERVER_PORT 12345 // Porta do servidor
#define BUF_SIZE	  1024  // Tamanho maximo dos buffers

// Funcao para visualizar erros
int fatal(char *str1, char *str2) {
  fprintf(stderr, str1, str2);
  exit(-1);
}

// Funcao principal da aplicacao cliente
int main(int argc, char *argv[]) {

  struct timespec start_envio_msg, end_envio_msg;
  uint64_t delta_us_envio_msg;

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
      if (strcmp(buffer_input,"-1\n") != 0) {

        //Medicao de tempo do inicio do envio e resposta 
        clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &start_envio_sha);

        // O +1 adicionado ao tamanho considera o byte \0 para indicar o fim da string
        write(socket_client, buffer_input, (strlen(buffer_input) + 1));
        read(socket_client, buffer_output, BUF_SIZE);

        //Medicao de tempo do fim do envio e resposta 
        clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &end_envio_sha);

        printf(" Resposta do servidor: %s\n", buffer_output);

        // Print do total de tempo gasto para envio e confirmação da mensagem
        delta_us_envio_msg = (end_envio_msg.tv_sec - start_envio_msg.tv_sec) * 1000000 + (end_envio_msg.tv_nsec - start_envio_msg.tv_nsec) / 1000;
        printf("\nTotal time = %ld us (10^-6 seconds)\n", delta_us_envio_msg );

      }
    }
  }
  close(socket_client);
  printf("\n********************************************************\n");
  printf(" Aplicacao encerrada. Ate mais!\n");
  printf("********************************************************\n\n");
}
