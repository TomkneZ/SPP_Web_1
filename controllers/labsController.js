const Lab = require("../models/lab.js");

exports.getLabs = function (request, response) {
    response.render("labs", {
        labs: Lab.getAll()
    })
};

exports.addLab = function (req, res, next) {
    const subject = req.body.subject;
    const number = req.body.number;
    const status = req.body.status;
    const deadline = req.body.deadline;
    const attach = req.file.originalname;
    const lab = new Lab(subject, number, status, deadline, attach);
    lab.save();
    res.redirect("/");
};

