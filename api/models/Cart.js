const { STRING } = require("sequelize");
const S = require("sequelize");
const sequelize = require("../db");

class Cart extends S.Model {}

Cart.init(
  {
    videoGames: {
      type: S.ARRAY(STRING),
    },
    cuanty: {
      type: S.INTEGER,
    },
    price: {
      type: S.INTEGER,
    },
  },
  { sequelize, modelName: "cart" }
);

module.exports = Cart;
