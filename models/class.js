'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Class.belongsToMany(models.User,{
        as:'user_list',
        through: models.UserClass,
        foreignKey:'classId'
       });
       Class.hasMany(models.Review, {
        foreignKey: 'classId'
      });
    }
  }
  Class.init({
    class: {
      type:DataTypes.STRING,
    allowNull:false},
    description:DataTypes.TEXT,
    picture:DataTypes.TEXT,
    time: DataTypes.TIME,
    date: DataTypes.DATE,
    capacity: DataTypes.INTEGER,
    cost: {
     type: DataTypes.INTEGER,
     allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Class',
    tableName:'classes'
  });
  return Class;
};