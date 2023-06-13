# Projeto Trybesmith

<strong>O que foi desenvolvido</strong>

Para este projeto, foi criada uma loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma _API_, utilizando _Typescript_ e _Sequelize_.

Você irá desenvolver as camadas de _Service_ e _Controllers_ da aplicação em seu código, utilizando _JWT_ para autenticar algumas rotas, além de testes para garantir o correto funcionamento delas. A aplicação terá _endpoints_ que darão suporte a operações de criação, leitura e atualização de informações.

---

# Requisitos

## Antes de começar

Implementação dos tipos `Order`, `Product` e `User`, do projeto na pasta `src/types` de forma adequada. Isso é necessário para as _migrations_ rodarem.

## 1 - Criação de um endpoint para o cadastro de produtos e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/products`);
- Os produtos enviados devem ser salvos na tabela `products` do banco de dados;
- O endpoint deve receber a seguinte estrutura:

```json
{
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
}
```

As ordens dos pedidos de id 1 a 3 já foram criados pelo seeders no banco de dados, sendo assim novos produtos devem passar um novo `orderId`, pois os produtos são exclusivos.

- Os testes devem garantir no mínimo 30% de cobertura do código das camadas `Service` e `Controller`.

---

## 2 - Criação um endpoint para a listagem de produtos e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/products`);
- Os testes devem garantir no mínimo 45% de cobertura do código das camadas `Service` e `Controller`.

---

## 3 - Crie um endpoint para listar todos os pedidos e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/orders`).
- Essa rota deve retornar todos os pedidos e os `id`s dos produtos associados a estes.
- Os testes devem garantir no mínimo 60% de cobertura do código das camadas `Service` e `Controller`.

---

## 4 - Criação de um endpoint para o login de pessoas usuárias e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/login`).

- A rota deve receber os campos `username` e `password`, e esses campos devem ser validados no banco de dados.

- Um token `JWT` deve ser gerado e retornado caso haja sucesso no _login_. No seu _payload_ deve estar presente o _id_ e _username_.

- O endpoint deve receber a seguinte estrutura:

```json
{
  "username": "string",
  "password": "string"
}
```

- Os testes devem garantir no mínimo 70% de cobertura do código das camadas `Service` e `Controller`.

---

## 5 - Criação das validações dos produtos e testes que cubram as funcionalidades deste endpoint

- Neste requisito iremos desenvolver validações referentes a criação do endpoint do requisito 1.
- Os testes devem garantir no mínimo 80% de cobertura do código das camadas `Service` e `Controller`.

---
