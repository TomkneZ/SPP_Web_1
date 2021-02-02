const labs = [];
module.exports = class Lab {
    constructor(subject, number, status, deadline, attach) {
        this.subject = subject;
        this.number = number;
        this.status = status;
        this.deadline = deadline;
        this.attach = attach;
    }

    save() {
        labs.push(this);
    }

    static getAll() {
        return labs;
    }
}