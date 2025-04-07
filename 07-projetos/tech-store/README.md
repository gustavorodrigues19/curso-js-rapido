# 🛒 Tech Store

## Frontend

### Páginas

- **/** -> Lista todos os produtos
- **/products/:id** -> Detalhes do produto
- **/cart** -> Carrinho de compras
- **/sign-in** -> Entrar no sistema
- **/register** -> Fazer cadastro
- **/checkout** -> Checkout de produtos
- **/account** -> Conta do cliente com informações pessoais
- **/account/orders** -> Pedidos daquel usuário

## Backend

### Endpoints

- **/health - (GET)** -> Health check do api
- **/categories - (POST)** -> Criar categoria
- **/categories - (GET)** -> Lista todas as categorias
- **/categories/:id - (GET)** -> Lista categoria
- **/products - (POST)** -> Cria produto
- **/products - (GET)** -> Lista todos os produtos
- **/products/:id - (GET)** -> Detalhes do produto
- **/products/:id - (PUT)** -> Atualiza produto
- **/carts - (POST)** -> Cria carrinho de compras
- **/carts - (GET)** -> Lista todos os carrinhos de compras
- **/carts/:id - (GET)** -> Detalhes do carrinho de compras
- **/carts/:id - (PUT)** -> Atualiza o carrinho de compras
- **/carts/:id - (DELETE)** -> Exclui o carrinho de compras
- **/auth/register - (POST)** -> Cadastra novo cliente
- **/auth/sign-in - (POST)** -> Faz login no sistema
- **/checkout - (POST)** -> Faz o checkout e redireciona para o pagamento
- **/acccounts/:id - (GET)** -> Lista os detalhes da conta
- **/acccounts/:id - (PUT)** -> Edita os detalhes da conta
- **/acccounts/:id/orders - (GET)** -> Lista todos os pedidos da conta
