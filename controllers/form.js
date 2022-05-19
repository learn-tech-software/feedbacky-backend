let Form = require("../models/Form")
let Answer = require("../models/Answer")

let generateScript = require("../helpers/generateScript")

exports.getForms = (req, res, next) => {
    Form.find({ userId: req.params.userId }).then((forms) => {
        if (forms.length > 0) {
            res.status(200).json(forms);     
        } else {
            res.status(401).json({ message: "there is not form here" });
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
}

exports.getFormDetails = (req, res, next) => {
    Form.find({ _id: req.params.formId }).then((forms) => {
        if (forms.length > 0) {
            res.status(200).json(forms);     
        } else {
            res.status(401).json({ message: "there is not form here" });
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
}

exports.createForm = (req, res, next) => {
    new Form({
        name: req.body.name,
        fieds: req.body.fieds,
        userId: req.body.userId,
    }).save().then(() => {
        res.status(201).json(req.body);
    }).catch((err) => {
        res.status(500).json({ error: err });
    });
}

exports.createAnswer = (req, res, next) => {
    Form.find({ _id: req.body.formId }).then((forms) => {
        if (forms.length > 0) {
            new Answer({
                response: req.body.response,
                userAgent: req.body.userAgent,
                formId: req.body.formId,
            }).save().then(() => {
                res.status(201).json(req.body);
            }).catch((err) => {
                res.status(500).json({ error: err });
            });    
        } else {
            res.status(401).json({ message: "there is not form here" });
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
}

exports.getFormAnswers = (req, res, next) => {
    Answer.find({ formId: req.params.formId }).then((answers) => {
        if (answers.length > 0) {
            res.status(200).json(answers);     
        } else {
            res.status(401).json({ message: "there is not answer here" });
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
}

exports.generateScriptFiles = (req, res, next) => {
    Form.find({ _id: req.params.formId }).then((forms) => {
        if (forms.length > 0) {
            res.json(generateScript.generate(forms[0]._id,forms[0].fieds))
        } else {
            res.status(401).json({ message: "there is not answer here" });
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
}
