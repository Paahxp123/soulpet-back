


const { where } = require("sequelize");
const Produto = require("../database/produto");

//Criação do grupo de rotas
const { Router } = require("express");


//Definição da rota
const router = Router();


//DELETAR TODOS OS PRODUTOS
router.delete("/produtos/all", async (req, res) => {
    try {
        await Produto.destroy({ truncate: true });
        res.status(200).json({ message: "Todos os produtos foram exluídos." });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Aconteceu um erro." });
    }

});

//DELETE PRODUTO
router.delete("/produtos/:id", async (req, res) => {
    const { id } = req.params;
    const produto = await Produto.findOne({ where: { id } });
    try {
        if (produto) {
            await produto.destroy();
            res.status(200).json({ message: "Produto excluído." });
        } else {
            res.status(404).json({ message: "Produto não encontrado." });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Aconteceu um erro." });
    }

});
//INSERIR PRODUTOS
router.post("/produtos", async (req, res) => {
    const { nome, preco, descricao, desconto, dataDesconto, categoria } = req.body;
    const dataAtual = new Date();
    const categorias = ["higiene","Higiene", "limpeza", "Limpeza","brinquedos","Brinquedos", "marcas","Marcas","cachorro","Cachorro", "gato", "Gato"];
    try {
        if (!categorias.includes(categoria)){
            return res.status(400).json({message: "Categoria inválida"});
        }
        if (desconto <0 || desconto >100){
            return res.status(400).json({message: "Desconto inválido"});
        }
        if (new Date(dataDesconto)< dataAtual){
        return res.status(400).json({message: "Data de desconto inválida!"})
        }
        const novo = await Produto.create({ nome, preco, descricao, desconto, dataDesconto, categoria });
        res.status(201).json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Ocorreu um erro ao criar um novo produto." });
    }
});

//LISTAR PRODUTOS
router.get("/produtos", async (req, res) => {
    const {nome, categoria} = req.query;
    try {
        //se tiver nome e categoria preciso pesquisar por nome e categoria
        //const produtos = await Produto.find(where:{nome:nome,categoria:categoria});
        //senão se, se tiver nome mostrar pesquisa com nome 
        //senão se, se tiver categoria mostrar pesquisa com categoria
        //senão se, se não tiver nem nome nem categoria mostrar todos 
        //const produtos = await Produto.find(where:{nome:nome,categoria:categoria});
      // return
        res.status(200).json(produtos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Ocorreu um erro ao buscar os produtos." });
    }
});

module.exports = router;



