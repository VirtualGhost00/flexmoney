const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./Router/routes");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "client", "build")));
app.use("/", routes);

mongoose
  .connect("mongodb://localhost:27017/flexmoney", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB!!");
  });

app.listen(port, () => console.log(`App listening on port ${port}!`));
