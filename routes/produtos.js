


const Produto = require("../database/produto");

//Criação do grupo de rotas
const {Router} = require("express");


//Definição da rota
const router = Router();


//DELETAR TODOS OS PRODUTOS
router.delete("/produtos/all", async (req, res) => {
    try {
            await Produto.destroy({truncate: true});
            res.status(200).json({message: "Todos os produtos foram exluídos."});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Aconteceu um erro."});
    }

});

//DELETE PRODUTO
router.delete("/produtos/:id", async (req, res) => {
    const {id} = req.params;
    const produto = await Produto.findOne({where: {id}});
    try {
        if (produto){
            await produto.destroy();
            res.status(200).json({message: "Produto excluído."});
        } else {
            res.status(404).json({message: "Produto não encontrado."});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Aconteceu um erro."});
    }

});



module.exports = router;