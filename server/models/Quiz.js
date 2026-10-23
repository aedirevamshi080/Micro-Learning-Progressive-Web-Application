const mongoose =
require("mongoose");

const QuizSchema =
new mongoose.Schema({

userEmail:String,

score:Number,

date:Date

});

module.exports =
mongoose.model(
"Quiz",
QuizSchema
);