const express=require("express")
//require==import
const app=express()
const port=700
app.use(express.json())
app.get("/manel",(req,res)=>{
res.send("hello")
})
app.get("/manelpost/:x/:y",(req,res)=>{
    const result=(+req.params.x)+(+req.params.y)
    res.send({result})
})




app.listen(port,console.log(`server is running on ${port}`))