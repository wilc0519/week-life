const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../../models/index')

class Note extends Model {
  static associate (models) {
    Note.belongsTo(models.User)
  }
};
Note.init({
  description: DataTypes.STRING,
  userId: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Note'
})

module.exports = Note
