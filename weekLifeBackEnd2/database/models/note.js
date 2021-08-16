
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');
class Note extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Note.belongsTo(models.User);
  }
};
Note.init({
  description: DataTypes.STRING,
  userId: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Note',
});
module.exports=Note;
