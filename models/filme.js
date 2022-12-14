'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class filme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  filme.init({
    codigo: DataTypes.STRING,
    categoria: DataTypes.STRING,
    titulo: DataTypes.STRING,
    ano: DataTypes.STRING,
    autor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'filme',
  });
  return filme;
};