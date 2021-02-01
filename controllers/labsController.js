const Lab = require("../models/lab.js");

exports.getLabs = function (request, response) {
    response.render("labs", {
        labs: Lab.getAll()
    })
};

exports.addLab = function (request, response) {
    if (!request.body) return response.sendStatus(400);   
    const subject = request.body.subject;
    const number = request.body.number;
    const status = request.body.status;
    const deadline = request.body.deadline;
    const lab = new Lab(subject, number, status, deadline);
    lab.save();
    response.redirect("/");
};
