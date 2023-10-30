import axios from "axios"
import { GETCURRENT, LOGIN, REGISTER } from "../action-type/action-typeUser"
import { alerterror } from "./ErrorAction"

export const register=(data,navigate)=>async(dispatch)=>{
    try {
      const res=await axios.post('/user/register',data)
      console.log(res)
        dispatch({type:REGISTER,payload:res.data})
        navigate('/product')
    } catch (error) {
        console.log(error);
        error.res.data.errors.forEach(element => {
            dispatch(alerterror(element.msg))
        }); 
    }
}
export const login=(data,navigate)=>async(dispatch)=>{
   try {
    const res=await axios.post("/user/login",data)
    dispatch({type:LOGIN,payload:res.data})
    navigate('/product')
   } catch (error) {
    console.log(error);
    error.res.data.errors.forEach(element => {
        dispatch(alerterror(element.msg))
    });
    
   } 
}
export const getcurrent =()=>async(dispatch)=>{
  const config={
    headers:{token:localStorage.getItem('token')}
  }
    try {
        const res=await axios.get('/user/getcurrent',config)
        dispatch({type:GETCURRENT,payload:res.data})
    } catch (error) {
        console.log(error)

    }
}