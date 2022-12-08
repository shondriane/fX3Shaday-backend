'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserClass.init({
    userId:{
     type: DataTypes.INTEGER,
     onDelete:'CASCADE',
     references:{
      model:'users',
      key:'id'
     }
    }, 
    classId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserClass',
    tableName:'user_classes'
  });
  return UserClass;
};