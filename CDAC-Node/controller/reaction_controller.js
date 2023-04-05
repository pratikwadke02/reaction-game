const reactionModel = require("../models/reaction");
const moleculemodel = require("../models/molecule");

// Get reactanst by id

exports.Get_Reactants = async (req, res, next) => {
  const { id } = req.query;

  try {
    const reactants = await reactionModel.find(
      { id: id },
      { reactant: 1, hint1: 1, hint2: 1 }
    );

    if (!reactants) return res.json({ error: "Something went wrong" });

    return res.status(200).json({ data: reactants });
  } catch (error) {
    console.log(error);
  }
};

exports.Get_Reaction_List = async (req, res, next) => {
  try {
    const reactionlist = await reactionModel.find({type:req.query.type}, { id: 1, name: 1 });

    if (!reactionlist) return res.json({ error: "Something went wrong" });

    return res.status(200).json({ data: reactionlist });
  } catch (error) {
    console.log(error);
  }
};

// exports.post_reaction = async (req, res, next) => {
//   const { id, reactant, product } = req.body;

//   try {
//     reactionModel.updateOne(
//       { id: id },
//         { $push: { reactant: reactant, product: product } }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.post_molecule = async (req, res, next) => {
  const { name, content } = req.body;

  try {
    //add molecule to database
    const molecule = new moleculemodel({
      name: name,
      content: content,
    });
    await molecule.save();
    return res.status(200).json({ data: "success" });
  } catch (error) {
    console.log(error);
  }
};

exports.get_molecule = async (req, res, next) => {
  const { name } = req.body;

  try {
    const molecule = await moleculemodel.find({});
    return res.status(200).json({ data: molecule });
  } catch (error) {
    console.log(error);
  }
};

exports.get_hint = async (req, res, next) => {
    const { id } = req.query;
    
    try {
        const hint = await reactionModel.find({ _id: id }, { hint1: 1, hint2: 1 });
        return res.status(200).json({ data: hint });
    } catch (error) {
        console.log(error);
    }
    };


exports.Get_Reaction_Details = async (req,res,next) =>{

    const {id} = req.query;
    
    try {
        const reaction = await reactionModel.find({_id:id}).populate('reactant').populate('product');

        return res.status(200).json({ data: reaction });

    } catch (error) {
        console.log(error);
    }

}