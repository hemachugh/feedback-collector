const Sequelize = require("sequelize");
const sequelize = new Sequelize("feedbackCollector", "root", "Shinchan@1420", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
