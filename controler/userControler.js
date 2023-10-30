const users=require("../model/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

exports.register=async(req,res)=>{
    const {email,name,password,image}=req.body
    try {
       const emailfound=await users.findOne({email})
       if(emailfound){

        res.status(400).send({msg:"user exists"})
       } else{
        const user=new users(req.body)
        const hashpassword=bcrypt.hashSync(password,10)
        //to hash the possword
        user.password=hashpassword
        const token=jwt.sign({id:user._id},"123456")
        //to assign a token to the user
        await user.save()
        res.status(200).send({msg:"user saved",user,token})
       }
    } catch (error) {
        res.status(500).send(error)    
    }
}
exports.login=async(req,res)=>{
    const {email,password}=req.body
try {
    const emailfound=await users.findOne({email})

    if(!(emailfound)){res.status(400).send({msg:"email not found"})}
    else if (bcrypt.compareSync(password,emailfound.password)){
        const token=jwt.sign({id:emailfound._id},"123456")
        res.status(200).send({msg:"user found",user:emailfound,token:token})}
    else{res.status(400).send({msg:"wrong password"})}
} catch (error) {
    res.status(500).send(error)
}
   
}