# Digital Bank - Bank End  

* ## :wrench: Tecnologias usadas
<div>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express-lightgrey?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Crypto-4B0082?style=for-the-badge&logo=bitcoin&logoColor=white" />
<img src="https://img.shields.io/badge/UUID-008080?style=for-the-badge&logo=uuid&logoColor=white" />
<img src="https://img.shields.io/badge/Currency-FFD700?style=for-the-badge&logo=bitcoin&logoColor=white" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />

</div>

## Antes de iniciar usa o 
```
npm install
npm upgrade
npm update
```
```
> banco-digital@1.0.0 start
> ts-node-dev src/index.ts

[INFO] 17:38:59 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.5.4)
Banco digital rodando na porta 3000
```

1-Abra o Postman.

2 Todas as URLS
```
POST - http://localhost:3000/accounts
GET - http://localhost:3000/accounts
GET - http://localhost:3000/accounts/{id}
PUT - http://localhost:3000/accounts/{id}
DELETE - http://localhost:3000/accounts/{id}
POST - http://localhost:3000/payments
POST - http://localhost:3000/savings
POST - http://localhost:3000/transfers
POST - http://localhost:3000/withdrawals
```
 ``` 
3-Crie uma nova requisição clicando em "New" e depois "Request".

4-Nomeie a requisição (por exemplo, "Criar Conta") e escolha uma coleção se desejar.

5-Selecione o método HTTP como POST, GET, PUT, DELETE 

6-Vá para a aba "Body".

7-Escolha o formato raw e JSON.

8-Cole o corpo da requisição conforme o exemplo acima.

9-Clique em "Send" para enviar a requisição
```

## 1. Criar uma Nova Conta
Método: POST

http://localhost:3000/accounts

Corpo da Requisição:

```
{
  "name": "Samuel",
  "birthday": "1990-01-01",
  "cpf": "123.456.789-00",
  "password": "senha123",
  "currency": "BRL"
}
```
Resposta Esperada
```
{
    "id": "d02e5773-4a6f-41f9-b87f-6de7563aa2e3",
    "name": "Samuel",
    "birthday": "1990-01-01",
    "cpf": "123.456.789-00",
    "password": "55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251",
    "balance": 0,
    "currency": "BRL"
}
```
Você pode criar quantas contas quiser mas lembrando o CPF é por conta criada então não da para repetir o mesmo CPF exemplo usando o mesmo CPF:
```
{
    "error": "CPF já cadastrado"
}
```
# Vamos criar uma outra conta
```
{
  "name": "Samuel B",
  "birthday": "1990-01-01",
  "cpf": "124.456.789-00",
  "password": "senha123",
  "currency": "BRL"
}
```
Resposta Esperada
```
{
    "id": "4783418d-cb82-485a-9cd5-13079f61032c",
    "name": "Samuel B",
    "birthday": "1990-01-01",
    "cpf": "124.456.789-00",
    "password": "55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251",
    "balance": 0,
    "currency": "BRL"
}
```
# 2. Listar Todas as Contas
Método: GET

URL: http://localhost:3000/accounts

Objetivo: Verificar se a conta que você criou aparece na lista de contas.

Resposta Esperada
```
[
    {
        "id": "d02e5773-4a6f-41f9-b87f-6de7563aa2e3",
        "name": "Samuel",
        "birthday": "1990-01-01",
        "cpf": "123.456.789-00",
        "password": "55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251",
        "balance": 0,
        "currency": "BRL"
    },
    {
        "id": "4783418d-cb82-485a-9cd5-13079f61032c",
        "name": "Samuel B",
        "birthday": "1990-01-01",
        "cpf": "124.456.789-00",
        "password": "55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251",
        "balance": 0,
        "currency": "BRL"
    },
    {
        "id": "0b220cc5-3345-49fd-b517-aa790a783945",
        "name": "Samuel C",
        "birthday": "1990-01-01",
        "cpf": "999.456.789-00",
        "password": "55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251",
        "balance": 0,
        "currency": "BTC"
    }
]
```
# 3. Obter uma Conta Específica
Método: GET

URL: http://localhost:3000/accounts/{id}

Substitua {id} pelo ID da conta que você criou (por exemplo, "d02e5773-4a6f-41f9-b87f-6de7563aa2e3"). Tira as ASPAS DUPLAS ""
Insira a URL: http://localhost:3000/accounts/d02e5773-4a6f-41f9-b87f-6de7563aa2e3

Resposta Esperada
```
{
    "id": "d02e5773-4a6f-41f9-b87f-6de7563aa2e3",
    "name": "Samuel",
    "birthday": "1990-01-01",
    "cpf": "123.456.789-00",
    "password": "55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251",
    "balance": 0,
    "currency": "BRL"
}
```
# 4. Atualizar uma Conta
Método: PUT

URL: http://localhost:3000/accounts/{id}

Substitua {id} pelo ID da conta que você deseja atualizar.
```
{
  "name": "Samuel Barbosa",
  "birthday": "1991-01-01",
  "cpf": "123.456.789-01",
  "password": "novaSenha123",
  "balance": 1000.00,
  "currency": "BTC"
```
Resposta Esperada
```
{
    "id": "d02e5773-4a6f-41f9-b87f-6de7563aa2e3",
    "name": "Samuel Silva",
    "birthday": "1991-01-01",
    "cpf": "123.456.789-01",
    "password": "4d015d5ce012726983e0091b6f261dda9b4cfb441f3d8520409bddc859d59d67",
    "balance": 1000,
    "currency": "BTC"
}
```
# 5. Exluir uma conta
Método: DELETE

URL: http://localhost:3000/accounts/{id}

Substitua {id} pelo ID da conta que você deseja excluir. No seu caso, use "0b220cc5-3345-49fd-b517-aa790a783945".

Resposta Esperada

```
{
    "message": "Conta excluída com sucesso"
}
```
# 6. Realizar um pagamento
Método: POST

URL: http://localhost:3000/payments

Corpo da Requisição:
```
{
  "accountId": "d02e5773-4a6f-41f9-b87f-6de7563aa2e3",
  "amount": 100.00
}
```
Resposta Esperada
```
{
    "message": "Pagamento realizado com sucesso",
    "balance": 900
}
```
# 7. Adicionar Economia
Método: POST

URL: http://localhost:3000/savings

Corpo da Requisição:
```
{
  "accountId": "d02e5773-4a6f-41f9-b87f-6de7563aa2e3",
  "amount": 500.00
}
```
Resposta Esperada
```
{
    "message": "Economia realizada com sucesso",
    "balance": 1400
}
```
# 8. Realizar um Saque
Método: POST

URL: http://localhost:3000/withdrawals

Corpo da Requisição:
```
{
  "accountId": "d02e5773-4a6f-41f9-b87f-6de7563aa2e3",
  "amount": 200.00
}

```
Resposta Esperada
```
{
    "message": "Saque realizado com sucesso",
    "balance": 1200
}
```
# 9. Realizar uma Transferência
Método: POST

URL: http://localhost:3000/transfers

Corpo da Requisição:
```
{
  "from": "d02e5773-4a6f-41f9-b87f-6de7563aa2e3",
  "to": "4783418d-cb82-485a-9cd5-13079f61032c",
  "amount": 50.00
}
```
Resposta Esperada

```
{
    "message": "Transferência realizada com sucesso",
    "fromAccount": {
        "id": "d02e5773-4a6f-41f9-b87f-6de7563aa2e3",
        "name": "Samuel Silva",
        "birthday": "1991-01-01",
        "cpf": "123.456.789-01",
        "password": "4d015d5ce012726983e0091b6f261dda9b4cfb441f3d8520409bddc859d59d67",
        "balance": 1150,
        "currency": "BTC"
    },
    "toAccount": {
        "id": "4783418d-cb82-485a-9cd5-13079f61032c",
        "name": "Samuel B",
        "birthday": "1990-01-01",
        "cpf": "124.456.789-00",
        "password": "55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251",
        "balance": 50,
        "currency": "BRL"
    }
}
```


