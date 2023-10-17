const products=require("../model/product")

exports.addProduct=async(req,res)=>{
    
   const {name,price,description,image,rating}=req.body
    try {
    const newProduct=new products(req.body)
    await newProduct.save()
    res.status(200).send({msg:"product added",newProduct})
} catch (error) {
    res.status(500).send({msg:"product not added"})
    
}

}
exports.delProduct=async(req,res)=>{
    
     try {
     const DELProduct=   await products.findByIdAndDelete(req.params.id)
     res.status(200).send({msg:"product deleted",DELProduct})
 } catch (error) {
     res.status(500).send({msg:"product not deleted"})
     
 }
 
 }
 exports.getProduct=async(req,res)=>{
    
    try {
    const GETProduct=   await products.find()
    res.status(200).send({msg:"products found",GETProduct})
} catch (error) {
    res.status(500).send({msg:"products not found"})
    
}

}
exports.updateProduct=async(req,res)=>{

    try {
    const UPDProduct=   await products.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.status(200).send({msg:"products found",UPDProduct})
} catch (error) {
    res.status(500).send({msg:"products not found"})
    
}

}