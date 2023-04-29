const { Router } = require("express");
const Servico = require("../database/servico");

// Criar o grupo de rotas (/clientes)
const router = Router();


router.post("/servicos", async (req, res) => {

    const { nome, preco } = req.body;

    try {
        if (nome, preco) {
            const novoServico = await Servico.create({ nome, preco });
            res.status(201).json(novoServico);
        } else {
            res.json({ message: "Nome ou preco invalido" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Acnteceu um erro." });
    }

});

module.exports = router;