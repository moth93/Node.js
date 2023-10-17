const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    name:{required:true,type:String},
    price:Number,
    description:String,
    image:String,
    rating:Number
})
module.exports=mongoose.model("products",productSchema)