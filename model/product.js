const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    name:{required:true,type:String},
    price:Number,
    description:String,
    image:String,
    rating:Number
})
//createing the schema for the data to get
module.exports=mongoose.model("products",productSchema)
//creating the collection called "products" in the 