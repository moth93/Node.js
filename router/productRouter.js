const express=require("express")
const { addProduct, delProduct, getProduct, updateProduct } = require("../controler/controler")

const routerProduct=express.Router()
// express.Router() is a function provided by Express that returns a new router object
routerProduct.post("/add",addProduct)// API
routerProduct.delete("/delete/:id",delProduct)
//the word "delete" is an HTTP method. Specifically, it represents the HTTP DELETE method. 
//HTTP methods are used to specify the type of request you are making to a particular route or URL.
//delProduct: is the handler function that will be executed when a DELETE request is made to the specified route
routerProduct.get("/get",getProduct)
routerProduct.put("/update/:id",updateProduct)
// this code helps create a basic API for managing product-related operations
module.exports=routerProduct