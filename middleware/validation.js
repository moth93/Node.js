const {validationResult,body}=require("express-validator")
exports.registervalidation=[
    body("email","please check the email format").isEmail(),
    body("password","minimum 8 charcters").isLength({min:8})
]
exports.loginvalidation=[
    body("email","please check the email format").isEmail(),
    body("password","minimum 8 charcters").isLength({min:8})
]
exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
   
    if (!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()})
    } 
    next()
}