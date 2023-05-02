const { Router } = require("express");
const Agendamento = require("../database/agendamento");

const router = Router();

// Inserir agendamento
router.post("/agendamentos", async (req, res) => {
  const { dataAgendada, realizada, petId, servicoId } = req.body;
  try {
    const novoAgendamento = await Agendamento.create(
      { dataAgendada, realizada, petId, servicoId },
    );
    res.status(201).json(novoAgendamento);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

// Listar agendamentos
router.get("/agendamentos", async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll();
    res.status(200).json(agendamentos);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

// Atualizar agendamento
router.put("/agendamentos/:id", async (req, res) => {
  const { id } = req.params;
  const { dataAgendada, realizada, petId, servicoId } = req.body;
  try {
    const agendamento = await Agendamento.findByPk(id);
    if (!agendamento) {
      return res.status(404).json({ message: "Agendamento não encontrado." });
    }
    await agendamento.update({ dataAgendada, realizada, petId, servicoId });
    res.status(200).json({ message: "Agendamento editado.", agendamento });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});


// Deletar agendamento 

router.delete("/agendamentos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const agendamento = await Agendamento.findByPk(id);
    if (!agendamento) {
      return res.status(404).json({ message: "Agendamento não encontrado." });
    }
    await agendamento.destroy();
    res.status(200).json({ message: "Agendamento removido." });
    res.status(204).end();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

module.exports = router;
