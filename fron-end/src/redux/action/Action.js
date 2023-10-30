import  axios  from "axios"
import { GET } from "../action-type/action-type"

 export const getProduct = ()=>async(dispatch)=>{
    try {
        const res=await axios.get("/product/get") 
        dispatch({type:GET,payload:res.data.GETProduct})
         
    } catch (error) {
        console.log(error)
    }
 }
 export const addProduct=(data)=>async(dispatch)=>{
    try {
        const res=await axios.post("/product/add",data)
        dispatch(getProduct())
    } catch (error) {
        console.log(error)
    }
 }
 export const delProduct=(id)=>async(dispatch)=>{
    try {
        const res=await axios.delete("/product/delete/"+id)
        dispatch(getProduct())
    } catch (error) {
        console.log(error)
    }
 }
 export const updateProduct = (id,data)=>async(dispatch)=>{
    try {
        const res=await axios.put("/product/update/"+id,data) 
        dispatch(getProduct())
         
    } catch (error) {
        console.log(error)
    }
 }