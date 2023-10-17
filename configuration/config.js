const mongoose=require("mongoose")

const connectdb=async()=>{
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/Store2")
        console.log("db is connected")
    } catch (error) {
        console.log("db not connected",error)
    }
}
module.exports=connectdb