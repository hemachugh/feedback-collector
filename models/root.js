const Sequelize = require("sequelize");
const sequelize = require("../database");
const rootModel = sequelize.define(
  "feedbackTable",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      AllowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    feedback: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = rootModel;
