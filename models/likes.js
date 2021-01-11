"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      likes.belongsTo(models.user, {
        foreignKey: "user_Id",
      });
      likes.belongsTo(models.recipe, {
        foreignKey: "recipe_id",
      });

      models.user.belongsToMany(models.recipe, {
        through: likes,
        foreignKey: "user_Id",
      });

      models.recipe.belongsToMany(models.user, {
        through: likes,
        foreignKey: "recipe_Id",
      });
    }
  }
  likes.init(
    {
      recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "rececipe",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        reference: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "likes",
    }
  );
  return likes;
};
