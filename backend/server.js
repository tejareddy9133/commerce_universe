const express = require("express");
const { UserRoutes } = require("./routes/User.routes");
const { connection } = require("./db/db");
const app = express(); //by this line we are done with creation of server
require("dotenv").config();
app.use(express.json());
app.use("/users", UserRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("server got started");
    console.log("server connected to db");
  } catch (error) {
    console.log(error.message);
  }
});
