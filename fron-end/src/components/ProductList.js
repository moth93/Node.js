import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/action/Action'
import ProdcutCard from './ProdcutCard'
import { getcurrent } from '../redux/action/ActionUser'


function ProductList() {
  
  const dispatch=useDispatch()
  useEffect(
    ()=>{
    dispatch(getProduct())
    dispatch(getcurrent())
    }
  ,[dispatch])
 const products=useSelector(state=>state.reducerProduct)
const user=useSelector(state=>state.reducerUser.user)
console.log(user)
  return (

    <div>
      {products.map(e=>
        <ProdcutCard  props={e}/>
        )}
    </div>
  )
}

export default ProductList