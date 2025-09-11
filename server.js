require("dotenv").config();
const db = require("./config/connection");
const e = require("express");
const apiRoutes = require("./routes/index");
const app = e();
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(e.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], // Allow the header
  })
);

app.use("/api", apiRoutes);

db.once("open", () => {
  app.listen(port, () =>
    console.log(`we made this @ http://localhost:${port}`)
  );
});
