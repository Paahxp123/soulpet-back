const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Agendamento = connection.define("agendamento", {
  dataAgendada: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  realizada: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

const Servico = require("./servico");
const Pet = require("./pet");

Pet.hasMany(Agendamento);
Agendamento.belongsTo(Pet, { foreignKey: { allowNull: true } });

Servico.hasMany(Agendamento);
Agendamento.belongsTo(Servico);

module.exports = Agendamento;
