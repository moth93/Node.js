import  axios  from "axios"
import { GET } from "../action-type/action-type"

 export const getProduct = ()=>async(dispatch)=>{
    try {
        const res=await axios.get("/product/get")
        console.log(res)  
        dispatch({type:GET,payload:res.data.GETProduct})
         
    } catch (error) {
        console.log(error)
    }
 }
 export const addProduct=(data)=>async(dispatch)=>{
    try {
        const res=await axios.post("http://localhost:700/product/add",data)
        dispatch(getProduct())
    } catch (error) {
        console.log(error)
    }
 }