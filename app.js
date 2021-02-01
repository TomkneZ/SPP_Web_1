const express = require("express");
const bodyParser = require("body-parser");

const multer = require("multer");

const app = express();
app.set("view engine", "ejs");

app.use(multer({ dest: "attaches" }).single("filedata"));


const urlencodedParser = bodyParser.urlencoded({ extended: false });
const labsController = require("./controllers/labsController");

app.post("/add", urlencodedParser, labsController.addLab);

app.use("/", labsController.getLabs);

app.listen(3000);