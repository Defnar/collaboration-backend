const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(console.log("database successfully connected"))
.catch(err => console.log("database failed to connect", err))

const db = mongoose.connection;

module.exports = db;