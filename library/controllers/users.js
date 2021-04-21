import  {User} from '../models/user.js'
let users=[]

export const getUsers=(req,res)=>{
    console.log("in function call getUser()... i think");
    // res.send(users)
    User.find()
            .then(
                (result)=>{
                    res.send(result)
                }
            )
            .catch(
                (err)=>{
                    console.log(err)
                    
                }
            ) 
}

export const getUserByID=(req,res)=>{
    console.log("in function call getUserByID()... i think");
    // res.send(users)
    User.findById(req.params.id)
            .then(
                (result)=>{
                    res.send(result)
                }
            )
            .catch(
                (err)=>{
                    console.log(err)
                    
                }
            ) 
}

export const createUser=(req,res)=>{
    console.log("in function call createUser() ... i think");
    
    const user = new User({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        city: req.body.city, 
    })
    user.save()
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}
