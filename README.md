## Index de conteúdos
-[O que é a SoulPet API](#o-que-é-a-soulpet-api)

-[O que posso realizar com a API](#o-que-posso-realizar-com-a-api)

-[Lista de end-points, rotas disponíveis, recursos e os parâmetros necessários](#lista-de-end-points-rotas-disponíveis-recursos-e-os-parâmetros-necessários)

-[Tecnologias utilizadas](#tecnologias-ulizadas)

-[Como rodar o projeto](#como-rodar-o-projeto)

-[Como utilizar a aplicação](#tecnologias-ulizadas)

-[Integrantes da realização do projeto SoulPet](#integrantes-da-realização-do-projeto-soulpet)
#
## O que é a SoulPet API? 

A SoulPet é uma aplicação para donos de petshop, é uma solução tecnológica que possibilita que as informações sobre os clientes, pets, produtos, serviços, vendas e outros dados relevantes sejam acessados e gerenciados de forma mais eficiente e automatizada.
#
 ## O que posso realizar com a API?
<ul> Essa API oferece diversos recursos, como por exemplo:
 <li> A criação de cadastros de clientes e seus respectivos pets. </li> 
  <li> A consulta de produtos disponíveis em estoque, e inserção ou remoção de novos produtos. </li> 
  <li> a realização de agendamentos de serviços </li> 
  <li> Pedidos feitos pelo site. </li> 
  Entre outros recursos.
</ul>
Com a utilização dessa API, os donos de petshops podem otimizar seus processos internos, reduzir erros e retrabalhos, além de aumentar a satisfação dos clientes, que terão seus atendimentos personalizados e ágeis.

#
## Lista de end-points, rotas disponíveis, recursos e os parâmetros necessários:
Ao abrir o Servidor/Site você encontrará a página Home da nossa aplicação. Dentro da página home podemos encontrar as seguintes rotas no nosso Backend: 
<ul>
<li> Inicio (http://localhost:3001)</li> 
<li> Produtos (http://localhost:3001/produto)</li> 
  <li> Clientes (http://localhost:3001/clientes) </li> 
  <li> Pets (http://localhost:3001/pets) </li> 
 <li> Serviços (http://localhost:3001/Servicos)</li> 
 <li> Pedidos (http://localhost:3001/pedido)</li> 
 
</ul>

Para rota `Produtos` criamos um recurso POST para a inserção de produtos novos. Criamos também o recurso `GET` para listagem de produtos e um `DELETE` para remoção dos mesmos.
Dentro desse recurso, mantivemos as seguintes categorias: "nome" ,"preco",
"descricao","desconto", "data de desconto", e "categoria". 
Com a rota http://localhost:3001/produto/novo.
E para atualizar o produto criamos uma recurso `PUT`. A rota será: http://localhost:3001/produtos/editar/. 

Para rota `Clientes`, nós também criamos um `POST` para a funções de adicionar, um `DELETE` para remover ou `PUT` para atualizar os clientes. Criamos também o recurso `GET` para listagem de produtos.
Que são as seguintes rotas:
Atualizar: http://localhost:3001/clientes/editar/ (Nos devolver o objeto atualizado, ou uma mensagem de erro caso não seja encontrado.)
Adicionar: http://localhost:3001/clientes/novo (Nos devolve um novo objeto inserido, ou uma mensagem de erro dependendo dos criterios atingidos.)


Para rota `Pets`, nós também temos as funções de adicionar `POST`, remover `DELETE` ou atualizar `PUT` os Pets. Criamos também o recurso `GET` para listagem de produtos.
Que são as seguintes rotas:
Atualizar: http://localhost:3001/pets/editar/ (Nos devolver o objeto atualizado, ou uma mensagem de erro caso não seja encontrado.)
Adicionar: http://localhost:3001/pets/novo (Nos devolve um novo objeto inserido, ou uma mensagem de erro dependendo dos criterios atingidos.)

Para rota `Serviços`, como nas outras também temos as funções de adicionar `POST`, remover `DELETE` ou atualizar `PUT` os serviços. Criamos também o recurso `GET` para listagem de serviços.
Que são as seguintes rotas:
Atualizar: http://localhost:3001/servicos/editar/ (Nos devolver o objeto atualizado, ou uma mensagem de erro caso não seja encontrado.)
Adicionar: http://localhost:3001/servicos/novo (Nos devolve um novo objeto inserido, ou uma mensagem de erro dependendo dos criterios atingidos.)


Para rota `Pedidos`, nós também temos as funções de adicionar `POST`, remover  `DELETE` ou atualizar `PUT` os serviços. Criamos também o recurso `GET` para listagem de produtos.
Que são as seguintes rotas:
Atualizar: http://localhost:3001/pedidos/editar/ (Nos devolver o objeto atualizado, ou uma mensagem de erro caso não seja encontrado.)
Adicionar: http://localhost:3001/pedidos/novo (Nos devolve um novo objeto inserido, ou uma mensagem de erro dependendo dos criterios atingidos.) 
Também implementamos a função de buscar pelo `Id` do cliente na Search bar. E buscar por todos os pedidos.

#
## Tecnologias Utilizadas
O projeto foi realizado com uso de:

 `Node.js`, `Express`, `Sequelize`, `MySQL`, `Morgan`, `Dotenv`, `NodeMon`, e `Joi`.
#
## Como rodar o projeto:
Para rodar o produto é necessário que você tenha instalados:
 [MySQl](https://dev.mysql.com/downloads/installer/), [git](https://git-scm.com/downloads), [Node js](https://nodejs.org/en/download), [VSCODE](https://code.visualstudio.com/download), [Joi](https://joi.dev).
Realizar um `Git Clone` no [respositório](https://github.com/users/eujoaolima/projects/4). E Instalar as dependências do projeto que são: @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, axios, bootstrap, bootstrap-icons, react, react-bootstrap, react-dom, react-hook-form, react-hot-toast, react-router-dom, react-scripts, web-vitals, yup e nodemon. Para instalar as dependências basta abrir o terminal CRTL+ J e digitando dentro do terminal: `Npm install`. Configurar o arquivo `.env`.
E configurar o script `start` no package.json: Da seguinte maneira: "start": "nodemon ./index.js".

Após isso você pode abrir seu terminal pressionando CRTL+ J. 
E digitando dentro do terminal: `npm start`, tanto na parte de front, quanto na parte de back para que em conjunto as duas funcionem junto e você seja capaz de adicionar, atualizar, remover e utilizar as funcionalidades do site sem mais problemas.
#
## Como utilizar a aplicação:
 <li> Acesse o site: O primeiro passo é acessar o site http://localhost:3000 </li>

 <li> Crie uma conta para seus clientes: Normalmente, você precisará fornecer informações pessoais dos clientes, como nome, endereço de e-mail, endereço e etc... Depois de criar a conta para seu cliente você pode adicionar seu respectivo pet. </li>

 <li> Navegue pelo site: Uma vez que você tenha feito login, você deve ser capaz de navegar pelo site. Você será capaz de ver informações sobre produtos e serviços, fazer compras, reservar serviços e muito mais. </li>

 <li> Faça compras: Você pode adicionar produtos ao carrinho e finalizar a compra para seu pet shop. Certifique-se de fornecer todas as informações necessárias para adquirir o produto. </li>

 <li>Agende serviços: Você será capaz de escolher o tipo de serviço que você deseja agendar, a data e hora que você prefere, e qualquer outra informação relevante para seu cliente. Por exemplo: "banho e tosa, valor: x, para cliente: y, às: 10:00." </li>

Entre em contato com o suporte: Se você tiver alguma dúvida ou problema ao utilizar o site, entre em contato conosco!
#
## Integrantes da realização do projeto SoulPet:

- **João Lima** - [GitHub] (https://github.com/eujoaolima), [LinkedIn] (https://www.linkedin.com/in/eujoaolima/)
- **Raissa Kimberly** - [GitHub] (https://github.com/raissakimberly), [LinkedIn] (https://www.linkedin.com/in/raissa-kimberly-12b103246//)
- **Raphael Faria** - [GitHub] (https://github.com/Raphaeldev84), [LinkedIn] (https://www.linkedin.com/in/raphael-gomes-faria-35b544239/)
- **Laura Xavier** - [GitHub] (https://github.com/lauraxavier), [LinkedIn] (https://www.linkedin.com/in/laura-xavier-75b9a0243/)
- **João Pedro Fernandes** - [GitHub] (https://github.com/Paahxp123), [LinkedIn] (https://www.linkedin.com/in/jo%C3%A3o-pedro-fernandes-b0b107137)
#
##
Agradecimentos a `SoulCode` e aos professores `Gabriel & Almir` por toda paciência e dedicação para nos ensinar!