var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var formSchema = new Schema({
    name: String,
    fieds: String,
    userId: String
});

module.exports = mongoose.model("form", formSchema);