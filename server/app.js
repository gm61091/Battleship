const express = require("express");
const app = express();
const db = require("./models");
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes/login"))
app.use(require("./routes/register"))
app.use(require("./routes/protected"))

db.sequelize.sync({ force: false })
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})