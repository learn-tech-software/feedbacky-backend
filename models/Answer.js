var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var answerSchema = new Schema({
    response: String,
    userAgent: String,
    formId: String
});

module.exports = mongoose.model("answer", answerSchema);