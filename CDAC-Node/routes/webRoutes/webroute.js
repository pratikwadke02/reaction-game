const express = require("express");
const router = express.Router();


router.get('/home-page',(req,res)=>{
    res.render('Home');
});

router.get('/neutralisation',(req,res)=>{
    res.render('neutralisation');
});

router.get('/neutralisation-list', (req, res)=> {
    res.render('neutralisationList');
});

router.get('/combustion-list', (req, res)=> {
    res.render('combustionList');
});

router.get('/displacement-list', (req, res)=> {
    res.render('displacementList');
});

router.get('/decomposition-list', (req, res)=> {
    res.render('decompositionList');
});

module.exports = router