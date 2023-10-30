const mongoose=require('mongoose')

const users=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    image:String
})
module.exports=mongoose.model("users",users)

