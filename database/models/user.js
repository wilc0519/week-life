const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../../models/index')

class User extends Model {
  static associate (models) {
    User.hasMany(models.Note, {
      foreignKey: 'userId',
      as: 'Notes'
    })
  }
};
User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  dateOfBirth: DataTypes.DATEONLY
}, {
  sequelize,
  modelName: 'User'
})

module.exports = User
