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
      likes.belongsTo(models.User, {
        foreignKey: "userid",
      });
      likes.belongsTo(models.recipes, {
        foreignKey: "recipeid",
      });

      models.User.belongsToMany(models.recipes, {
        through: likes,
        foreignKey: "userid",
      });

      models.recipes.belongsToMany(models.User, {
        through: likes,
        foreignKey: "recipeid",
      });
    }
  }
  likes.init(
    {
      recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "recipe",
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
