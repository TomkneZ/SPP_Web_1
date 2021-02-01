const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const labsController = require("./controllers/labsController");

app.post("/add", urlencodedParser, labsController.addLab);

app.use("/", labsController.getLabs);

app.listen(3000);