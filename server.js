const express=require("express")
const cors=require("cors")
const connectdb = require("./configuration/config")
const routerProduct=require("./router/productRouter")
const userRouter = require("./router/userRouter")

//require==import
const app=express()
const port=700
app.use(express.json())


app.use("/product",routerProduct)
app.use("/user",userRouter)
//what ever comes out of routerProduct is going to work on /product/... path
connectdb()
//this is the fucntion used to create the DB (in config.js )
app.listen(port,console.log(`server is running on ${port}`))
