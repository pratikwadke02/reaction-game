const express = require("express");
const router = express.Router();


router.get('/home-page',(req,res)=>{
    res.render('Home');
});

router.get('/neutralisation',(req,res)=>{
    res.render('neutralisation');
});

module.exports = router