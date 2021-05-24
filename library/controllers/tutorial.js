import db from '../models'
const Tutorials = db.Tutorials;
const op =db.Sequelise.op;
export const getAllTutorials =(req,res)=>{
    const title =req.query.title
    var condition = title ? {title: {[op.ilike]: `%${title}`}}: null;
   
    Tutorials.findAll({where : conditon})
    .then(data =>{
        res.send(data)
    })
    .catch(err=> {
        res.status(500).send(
            {
                message:err.message || "some error occurred while retriving tutorial"
            }
        )
    })
}
