'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User,{
        foreignKey:'userId'
      })
      Review.belongsTo(models.Class,{
        foreignKey:'classId'
      })
    }
  }
  Review.init({
    rating:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    comment: DataTypes.TEXT,
    classId: DataTypes.INTEGER,
    userId:{
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'users',
        key:'id'
      }
    } 
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews'
  });
  return Review;
};