import express from "express"
import bodyParser from "body-Parser"
import userRouter from"./routers/users.js"
import mongoose from 'mongoose'

const dbURI='mongodb+srv://abh2:123@cluster0.9jwi9.mongodb.net/library?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser: true ,useUnifiedTopology: true})
        .then(
            (result)=>{
                console.log("connection to the database")
                server.listen(PORT)
                console.log("server start succesfully")

            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )

const server = express();
const PORT=8989

server.use(bodyParser.json())
server.get("/",(req,res)=>{
    res.send("welecom to my webpage");
})
server.use("/user",userRouter);


