const express=require("express")
const { register, login } = require("../controler/userControler")
const { validation, registervalidation, loginvalidation } = require("../middleware/validation")
const { isauth } = require("../middleware/isauth")
const userRouter=express.Router()

userRouter.post("/register",registervalidation,validation,register)
userRouter.post("/login",loginvalidation,validation,login)
userRouter.get("/getcurrent",isauth,(req,res)=>{
    res.send({user:req.user})
})
module.exports=userRouter
