const db = require("../models");
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("db was reset");
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
