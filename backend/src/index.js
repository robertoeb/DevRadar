const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@devradar-yhjvb.gcp.mongodb.net/devradar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
