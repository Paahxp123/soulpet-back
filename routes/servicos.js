const { Router } = require("express");
const Servico = require("../database/servico");
const { servicoSchema } = require('../database/validations');

// Criar o grupo de rotas (/Serviços)
const router = Router();

router.post("/servicos", servicoSchema, async (req, res) => {
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
//LISTAR SERVIÇOS
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
//DELETAR SERVIÇO
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
//DELETAR TODOS OS SERVIÇOS
router.delete("/servicos-all", async (req, res) => {
  try {
    await Servico.destroy({ truncate: true });
    res.json({ message: "Todos os servicos foram removidos." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});
//ATUALIZAR SERVIÇOS
router.put("/servicos/:id", servicoSchema, async (req, res) => {
  const { nome, preco } = req.body;
  const { id } = req.params;
  try {
    const servico = await Servico.findOne({ where: { id } });
    if (servico) {
      await servico.update({ nome, preco });
      res.status(200).json({ message: "Serviço editado." });
    } else {
      res.status(404).json({ message: "Serviço não encontrado." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

module.exports = router;
