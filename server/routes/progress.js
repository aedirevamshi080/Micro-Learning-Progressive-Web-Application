const express =
require("express");

const router =
express.Router();

const Progress =
require("../models/progress");

const Quiz =
require("../models/Quiz");

router.post(
"/progress",
async(req,res)=>{

try{

const payload = Array.isArray(req.body) ? req.body : [req.body];

await Progress.insertMany(payload);

res.json({
message:"Progress Synced"
});
}catch(err){

console.error(err);

res.status(500).json({
message:"Failed to sync progress"
});

}

});

router.post(
"/quiz",
async(req,res)=>{

try{

const payload = Array.isArray(req.body) ? req.body : [req.body];

await Quiz.insertMany(payload);

res.json({
message:"Quiz Synced"
});
}catch(err){

console.error(err);

res.status(500).json({
message:"Failed to sync quiz"
});

}

});

module.exports =
router;