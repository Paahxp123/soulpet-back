const { Router } = require("express");
const Servico = require("../database/servico");

// Criar o grupo de rotas (/clientes)
const router = Router();

router.post("/servicos", async (req, res) => {
  const { nome, preco } = req.body;

  try {
    if ((nome, preco)) {
      const novoServico = await Servico.create({ nome, preco });
      res.status(201).json(novoServico);
    } else {
      res.json({ message: "Nome ou preco invalido" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Aconteceu um erro." });
  }
});

router.get("/servicos", async (req, res) => {
  const Servicos = await Servico.findAll();
  res.json(Servicos);
});

router.get("/servicos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const servico = await Servico.findByPk(id);
    if (servico) {
      res.json(servico);
    } else {
      res.status(404).json({ message: "Serviço não encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ocorreu um erro." });
  }
});

router.delete("/servicos/:id", async (req, res) => {
  try {
    const servico = await Servico.findByPk(req.params.id);
    if (servico) {
      await servico.destroy();
      res.json({ message: "Serviço foi removido." });
    } else {
      res.status(404).json({ message: "Serviço não encontrado." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

router.delete("/servicos-all", async (req, res) => {
  try {
    await Servico.destroy({ truncate: true });
    res.json({ message: "Todos os servicos foram removidos." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

module.exports = router;
