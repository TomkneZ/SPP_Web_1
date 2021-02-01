const labs = [];
module.exports = class Lab {
    constructor(subject, number, status, deadline) {
        this.subject = subject;
        this.number = number;
        this.status = status;
        this.deadline = deadline;
    }

    save() {
        labs.push(this);
    }

    static getAll() {
        return labs;
    }
}