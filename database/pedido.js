const { DataTypes } = require("sequelize");
const { connection } = require("./database");
const Cliente = require("./cliente");
const Produto = require("./produto");

const Pedidos = connection.define("pedidos", {
    pedidoId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
});

// Associação Cliente-Pedido: 1:N
    Cliente.hasMany(Pedidos, {
        foreignKey: 'pedidoId',
        onDelete: 'CASCADE'
    });
    Pedidos.belongsTo(Cliente);

// Associação Produto-Pedido: 1:N

    Produto.hasMany(Pedidos, {
        foreignKey: 'pedidoId',
        onDelete: 'CASCADE'
    });
    Pedidos.belongsTo(Produto);

module.exports = Pedidos;
