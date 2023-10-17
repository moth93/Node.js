const express=require("express")
const connectdb = require("./configuration/config")
const routerProduct=require("./router/productRouter")
//require==import
const app=express()
const port=700
app.use(express.json())
app.use("/product",routerProduct)
connectdb()



app.listen(port,console.log(`server is running on ${port}`))
