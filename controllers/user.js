let User = require("../models/User");
let jwtOperations = require("../helpers/jwtOperations");

exports.login = (req, res, next) => {
    User.find({ name: req.body.name, password: req.body.password }).then((users) => {
        if (users.length > 0) {
            let token = jwtOperations.generateJwtToken(req.body.name)
            res.status(200).json({ token: "Bearer " + token, userId: users[0]._id });     
        } else {
            res.status(401).json({ message: "Name or password is not correct" });
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
}

exports.createUser = (req, res, next) => {
    if (req.body.name) {
        User.find({ name: req.body.name }).then((users) => {
            if (users.length == 0) {
                new User({
                    name: req.body.name,
                    mail: req.body.mail,
                    password: req.body.password,
                }).save().then(() => {
                    res.status(201).json(req.body);
                }).catch((err) => {
                    res.status(500).json({ error: err });
                });
            } else {
                res.status(500).json({ message: "You created a user with this name before" });
            }
        }).catch((err) => {
            res.json(err);
        });
    } else {
        res.status(400).json("Please, add your all fields...");
    }
}

exports.getDetails = (req, res, next) => {
    console.log(req.user)
    User.find({ name: req.user.username }).then((users) => {
        res.status(200).json({ users: users });     
    }).catch((err) => {
        res.status(500).json(err);
    });
}