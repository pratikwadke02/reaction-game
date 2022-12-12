const reactionModel = require('../models/reaction');



// Get reactanst by id

exports.Get_Reactants = async(req,res,next) =>{

    const {id} = req.body;

    try {
        
        const reactants = await reactionModel.find({'id':id},{"reactant":1,"hint1":1,"hint2":1})

        if(!reactants)
            return res.json({error:"Something went wrong"});

        return res.status(200).json({data:reactants});

    } catch (error) {
        console.log(error)
    }
}


exports.Get_Reaction_List = async(req,res,next)=>{


    try {
        
        const reactionlist = await reactionModel.find({},{'id':1,'name':1});

        if(!reactionlist)
            return res.json({error:"Something went wrong"});

        return res.status(200).json({data:reactionlist});

    } catch (error) {
        console.log(error)
    }
}


exports.Get_Reaction_List = async(req,res,next) =>{
    try {
        
        const reactionlist = await reactionModel.find({},{'id':1,'name':1});

        if(!reactionlist)
            return res.json({error:"Something went wrong"});

        return res.status(200).json({data:reactionlist});

    } catch (error) {
        console.log(error)
    }
}
