#include <stdio.h>
#include <openssl/sha.h>
#include <string.h>

int main(int arcount, char *args[]){
    if(arcount != 2) {
        printf("Usage %s <string>\n", args[0]);
        return 1;
    }
    printf ("Input: %s\n", args[1]);
    unsigned char *hash = SHA256(args[1], strlen(args[1]), NULL);
    printf("SHA 256: ");
    for(int i=0; i < 32; i++){
        printf("%02x", hash[i]);
    }
    printf("\n");

    hash = SHA512(args[1], strlen(args[1]), NULL);
    printf("SHA 512: ");
    for(int i=0; i < 64; i++){
        printf("%02x", hash[i]);
    }
    printf("\n");
    return 0;
}