'use strict';
const criptografa = require('../criptografia');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('filmes', [
      { codigo: criptografa.encriptar("1"), titulo: "Emancipation", ano: "2022", autor: "Antoine Fuqua", categoria: "ação"},
      { codigo: criptografa.encriptar("2"), titulo: "Adão Negro", ano: "2022", autor: "Jaume Collet-Serra", categoria: "ação"},
      { codigo: criptografa.encriptar("3"), titulo: "O Troll da Montanha", ano: "2022", autor: " Roar Uthaug", categoria: "Aventura"},
      { codigo: criptografa.encriptar("4"), titulo: "A Mulher Rei", ano: "2022", autor: "Gina Prince-Bythewood", categoria: "Aventura"}
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('filmes', null, {});
  }
};
