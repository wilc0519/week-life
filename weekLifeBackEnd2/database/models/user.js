const {Model, DataTypes} = require('sequelize');
//const {sequelize} = require('../../models/index');

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    User.hasMany(models.Notes,{
      foreignKey:'userId',
      as:'notes'
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
  modelName: 'User',
});

  module.exports = User;