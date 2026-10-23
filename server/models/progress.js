const mongoose =
require("mongoose");

const ProgressSchema =
new mongoose.Schema({

userEmail:String,

courseId:String,

completed:Boolean,

date:Date

});

module.exports =
mongoose.model(
"Progress",
ProgressSchema
);