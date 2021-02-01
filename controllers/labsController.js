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
    const lab = new Lab(subject, number, status, deadline);
    lab.save();
    res.redirect("/");
    /*if (!request.body) return response.sendStatus(400);   
    const subject = request.body.subject;
    const number = request.body.number;
    const status = request.body.status;
    const deadline = request.body.deadline;
    const attach = request.body.attach;
    const lab = new Lab(subject, number, status, deadline, attach);
    lab.save();
    response.redirect("/");*/
};

