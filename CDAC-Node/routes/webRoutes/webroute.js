const express = require("express");
const router = express.Router();


router.get('/home-page',(req,res)=>{
    res.render('Home');
});

router.get('/neutralisation-reaction/:id',(req,res)=>{
    res.render('neutralisation');
});

router.get('/reaction-page/:id/:type',(req,res)=>{
    res.render('displacement');
});

router.get('/decomposition-reaction/:id',(req,res)=>{
    res.render('decomposition');
});

router.get('/combustion-reaction/:id',(req,res)=>{
    res.render('combustion');
});

router.get('/neutralisation-list', (req, res)=> {
    res.render('neutralisationList');
});

router.get('/combustion-list', (req, res)=> {
    res.render('combustionList');
});

router.get('/reaction-list/:type', (req, res)=> {
    res.render('displacementList');
});

router.get('/decomposition-list', (req, res)=> {
    res.render('decompositionList');
});

module.exports = router