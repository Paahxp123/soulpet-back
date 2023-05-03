
const { celebrate, Joi } = require('celebrate');
const{ messages } = require('joi-translation-pt-br');

const servicoSchema = celebrate({
    body: Joi.object().keys({
        nome: Joi.string().required(),
        preco: Joi.number().positive(),
      })
},{
    abortEarly: false,
    messages: messages,
});

const petSchema = celebrate({
    body: Joi.object().keys({
    nome: Joi.string().max(130).required(),
    tipo: Joi.string().max(100).required(),
    porte: Joi.string().max(100).required(),
    dataNasc: Joi.date().iso().required(),
    clienteId: Joi.number().integer().positive().required(),
  })}, {
    abortEarly: false,
    messages: messages,
});

const clienteSchema = celebrate({
  body: Joi.object().keys({
    nome: Joi.string().max(130).required(),
    email: Joi.string().email().required(),
    telefone: Joi.string().required(),
    endereco: {
      uf: Joi.string().max(2).required(),
      cidade: Joi.string().required(),
      cep: Joi.string().max(9).required(),
      rua: Joi.string().required(),
      numero: Joi.string().required(),

    }
  })}, {
    abortEarly: false,
    messages: messages
});

const pedidoSchema = celebrate({
  body: Joi.object().keys({
    quantidade: Joi.number().integer().positive().required(),
    clienteId: Joi.number().integer().positive().required(),
    produtoId: Joi.number().integer().positive().required(),
  })}, {
    abortEarly: false,
    messages: messages,
  });

  const produtoSchema = celebrate({
    body: Joi.object().keys({
      nome: Joi.string().required(),
      preco: Joi.number().integer().positive().required(),
      descricao: Joi.string().max(150).required(),
      desconto: Joi.number().required(),
      dataDesconto: Joi.date().iso().required(),
      categoria: Joi.string().required()
    })}, {
      abortEarly: false,
      messages: messages
    });

module.exports = {
  servicoSchema,
  petSchema,
  clienteSchema,
  pedidoSchema,
  produtoSchema,
};
