// Importações principais e variáveis de ambiente
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const agendamento = require("./database/agendamento");
const cliente = require("./database/cliente");
const endereco = require("./database/endereco");
const Pedido = require("./database/pedido");
const Pet = require("./database/pet");
const Produto = require("./database/produto");
const Servico = require("./database/servico");
// importações do schema de validação
const { errors } = require('celebrate');

// Configuração do App
const app = express();
app.use(express.json()); // Possibilitar transitar dados usando JSON
app.use(morgan("dev"));

// Configurações de acesso
app.use(cors({ origin: "http://localhost:3000" }));


// Configuração do Banco de Dados
const { connection, authenticate } = require("./database/database");
authenticate(connection); // efetivar a conexão

// Definição de Rotas
const rotasClientes = require("./routes/clientes");
const rotasPets = require("./routes/pets");
const rotasProdutos = require("./routes/produtos");
const rotasServicos = require("./routes/servicos");
const rotasPedidos = require("./routes/pedidos");
const rotasAgendamentos = require("./routes/agendamentos");
const rotasDashboard = require("./routes/dashboard");
// const rotasPedidos = require("./routes/pedidos");

// Juntar ao app as rotas dos arquivos
app.use(rotasClientes); // Configurar o grupo de rotas no app
app.use(rotasPets);
app.use(rotasProdutos);
app.use(rotasServicos);
app.use(rotasPedidos);
app.use(rotasAgendamentos);
app.use(rotasDashboard);
// app.use(rotasPedidos);


// Adicione o middleware de tratamento de erros do Celebrate
app.use(errors());


// Adicione o middleware de tratamento de erros do Celebrate
app.use(errors());


app.listen(3001, async () => {
  try {
    // Gerar as tabelas a partir do model
    // Force = apaga tudo e recria as tabelas
    const dbForce = process.env.DB_FORCE
if (dbForce == "true") {
  connection.sync({ force: true }).then(async () => {

    const cliente1 = await cliente.create({ nome: 'João',email:"joao@gmail.com", telefone:"9912-198" });
    const cliente2 = await cliente.create({ nome: 'Amanda',email:"amanda@gmail.com",telefone:"9777-000" });

    // Cria três pets: dois pertencentes ao primeiro cliente e outro do segundo
    const pet1 = await Pet.create({ nome: 'Thor', clienteId: cliente1.id, tipo:"cachorro",porte:"médio",dataNasc:'2022/05/05' });
    const pet2 = await Pet.create({ nome: 'Mel', clienteId: cliente1.id, tipo:"gato",porte:"médio",dataNasc:'2023/04/04' });
    const pet3 = await Pet.create({ nome: 'Bily', clienteId: cliente2.id, tipo:"cachorro",porte:"médio",dataNasc:'2023/05/01' });
    const servico1 = await Servico.create({nome:'Banho e tosa', preco:100});
    const servico2 = await Servico.create({nome:'Banho e tosa para cães e gatos', preco:100});
    const agendamento1 = await agendamento.create({dataAgendada:'2023/07/07', realizada: 'true', petId:pet3.id,servicoId:servico1.id});
    const agendamento2 = await agendamento.create({dataAgendada:'2023/08/08', realizada:'false',petId:pet2.id,servicoId:servico2.id});
    const produto1 = await Produto.create({nome: 'produtotest',preco:20, descricao:'descriçãotest', desconto:0.1,dataDesconto:'2023/09/09',categoria:'higiene'});
    const pedido1 = await Pedido.create({clienteId:cliente1.id, quantidade:1, produtoId:produto1.id});
    const pedido2 = await Pedido.create({clienteId:cliente2.id, quantidade:3,produtoId:produto1.id });
    const endereco1 = await endereco.create({uf:'SP',cidade:'São Paulo',cep:'0000000',rua:'ruatest',numero:'10',clienteId:cliente1.id});
    
  }).catch((err) => {
    console.error('Erro ao sincronizar banco de dados', err)
  })
} else {
  connection.sync()
}
    console.log("Servidor rodando em http://localhost:3001/");
  } catch (error) {
    console.error("Erro ao criar as tabelas:", error);
  }
});