# Segurança e Auditorio em Sistemas - 8 semestre

## Trabalhos de Segurança - C

### Cliente e Servidor Original - Prateleira

* cliente
* servidor

### Cliente e Servidor Sha-512 - Prateleira

* cliente
* servidor

# Instruções

## Dependências :heavy_check_mark:

| Dependência | Versão
|---| ---|
| lcrypto | - |

## Como compilar

```
gcc servidor.c -lcrypto -o servidor 
```

```
gcc cliente.c -lcrypto -o cliente 
```

## Como executar

```
./servidor 
```

Substitua **localhost** pelo ip da maquina em que o servidor esteja rodando.

```
./cliente localhost 
```
