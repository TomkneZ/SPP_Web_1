const express = require("express");
const bodyParser = require("body-parser");

const multer = require("multer");
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "attaches");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const app = express();
app.set("view engine", "ejs");

app.use(multer({ storage: storageConfig }).single("filedata"));

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const labsController = require("./controllers/labsController");

app.post("/add", urlencodedParser, labsController.addLab);

app.use("/", labsController.getLabs);

app.listen(3000);