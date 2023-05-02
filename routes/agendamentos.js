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

module.exports = router;
