/* This is a basic setup for a Node.js server using the Express framework. */
const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
