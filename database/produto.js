const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Produto = connection.define("produto", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(150),
        allowNull: false

    },
    desconto: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    dataDesconto: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [["higiene","Higiene", "limpeza", "Limpeza","brinquedos","Brinquedos", "marcas","Marcas","cachorro","Cachorro", "gato", "Gato"]]
        }
    }
});


module.exports = Produto;