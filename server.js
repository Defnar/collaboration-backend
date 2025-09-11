require("dotenv").config();
const db = require("./config/connection");
const e = require("express");
const apiRoutes = require("./routes/index");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api", apiRoutes);

db.once("open", () => {
  app.listen(port, `we made this @ http://localhost:${port}`);
});
