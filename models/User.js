var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    mail: String,
    password: String
});

module.exports = mongoose.model("user", userSchema);