const express = require('express');
const router = express.Router();

router.get("/candidate",(req,res)=>{
    res.send("Hello World")
})
router.post("/candidate",(req,res)=>{
    res.send("Hello World")
})

router.patch("/candidate",(req,res)=>{
    res.send("Hello World")
})
router.delete("/candidate",(req,res)=>{
    res.send("Hello World")
})
module.exports=router