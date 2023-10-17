const express=require("express")
const { addProduct, delProduct, getProduct, updateProduct } = require("../controler/controler")
const routerProduct=express.Router()
routerProduct.post("/add",addProduct)
routerProduct.delete("/delete/:id",delProduct)
routerProduct.get("/get",getProduct)
routerProduct.put("/update/:id",updateProduct)
module.exports=routerProduct