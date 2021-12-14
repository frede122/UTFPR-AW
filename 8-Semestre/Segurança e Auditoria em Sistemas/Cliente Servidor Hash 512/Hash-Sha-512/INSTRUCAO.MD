# Instruções

## Dependências :heavy_check_mark:

| Dependência | Versão
|---| ---|
| lcrypto | - |

## Como compilar

`` gcc servidor.c -lcrypto -o servidor ``

`` gcc cliente.c -lcrypto -o cliente ``

## Como executar

`` ./servidor ``

Substitua **localhost** pelo ip da maquina em que o servidor esteja rodando.

`` ./cliente localhost ``
