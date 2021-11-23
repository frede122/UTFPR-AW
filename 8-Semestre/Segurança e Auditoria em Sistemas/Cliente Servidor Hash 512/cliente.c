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
#include <time.h>
#include <stdint.h>

#define SERVER_PORT 12345 // Porta do servidor
#define BUF_SIZE	  1024  // Tamanho maximo dos buffers

// Funcao para visualizar erros
int fatal(char *str1, char *str2) {
  fprintf(stderr, str1, str2);
  exit(-1);
}


//Funcao que cria um hash de sha512 e converte de unsigned char para char string
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
  struct timespec start_sha512, end_sha512;
  struct timespec start_envio_sha, end_envio_sha;
  struct timespec start_envio_msg, end_envio_msg;
  uint64_t delta_us_sha512;
  uint64_t delta_us_envio_sha;
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
      char hashTemp[129];

      //Medicao de tempo do inicio da criacao do has de 512 
      clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &start_sha512);

      sha512_string(buffer_input, hashTemp);
      
      //Medicao de tempo do fim da criacao do has de 512 
      clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &end_sha512);

      if (strcmp(buffer_input,"-1\n") != 0) {

        //Medicao de tempo do inicio do envio e resposta do hash de 512 
        clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &start_envio_sha);

        // O +1 adicionado ao tamanho considera o byte \0 para indicar o fim da string
        write(socket_client, hashTemp, (strlen(hashTemp) + 1));
        read(socket_client, buffer_output, BUF_SIZE);
        
        //Medicao de tempo do fim do envio e resposta do hash de 512 
        clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &end_envio_sha);


        printf("\nResposta do servidor: Hash recebido - %s\n", buffer_output);


        //Medicao de tempo do inicio do envio e resposta da mensagem 
        clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &start_envio_msg);

        write(socket_client, buffer_input, (strlen(buffer_input) + 1));
        read(socket_client, buffer_output, BUF_SIZE);

        //Medicao de tempo do fim do envio e resposta da mensagem 
        clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &end_envio_msg);


        printf("\nResposta do servidor:  %s\n", buffer_output);
        
        delta_us_sha512 = (end_sha512.tv_sec - start_sha512.tv_sec) * 1000000 + (end_sha512.tv_nsec - start_sha512.tv_nsec) / 1000;
        delta_us_envio_sha = (end_envio_sha.tv_sec - start_envio_sha.tv_sec) * 1000000 + (end_envio_sha.tv_nsec - start_envio_sha.tv_nsec) / 1000;
        delta_us_envio_msg = (end_envio_msg.tv_sec - start_envio_msg.tv_sec) * 1000000 + (end_envio_msg.tv_nsec - start_envio_msg.tv_nsec) / 1000;
        printf("\nTotal time = %ld us (10^-6 seconds)\n", delta_us_sha512+delta_us_envio_sha+delta_us_envio_msg );
      }
    }
  }
  close(socket_client);
  printf("\n********************************************************\n");
  printf(" Aplicacao encerrada. Ate mais!\n");
  printf("********************************************************\n\n");
}
