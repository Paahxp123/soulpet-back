const { Router } = require("express");
const Pet = require("../database/pet");
const Cliente = require("../database/cliente");
const Agendamento = require("../database/agendamento");
const Servico = require("../database/servico");
const Pedido = require("../database/pedido");
const Produto = require("../database/produto");
const Dashboard = require("../database/dashboard");

const router = Router();

router.get("/dashboard", async (req, res) => {
  try {
    // Contagem de dados
    const totalClientes = await Cliente.count(); // Conta o total de clientes
    const totalPets = await Pet.count(); // Conta o total de pets
    const totalAgendamentos = await Agendamento.count(); // Conta o total de agendamentos
    const totalServicos = await Servico.count(); // Conta o total de serviços
    const totalPedidos = await Pedido.count(); // Conta o total de pedidos
    const totalProdutos = await Produto.count(); // Conta o total de produtos

    // Dados para o dashboard
    const dadosDashboard = {
      totalClientes,
      totalPets,
      totalAgendamentos,
      totalServicos,
      totalPedidos,
      totalProdutos,
    };

    // Cria um novo objeto Dashboard com os dados coletados na rota
    const dashboard = await Dashboard.create(dadosDashboard);

    res.json(dadosDashboard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

module.exports = router;
