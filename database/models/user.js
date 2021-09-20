const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../../models/index')

class User extends Model {
};
User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  dateOfBirth: DataTypes.DATEONLY
}, {
  sequelize,
  modelName: 'User'
})

module.exports = User
