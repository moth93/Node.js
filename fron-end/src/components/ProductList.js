import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/action/Action'
import ProdcutCard from './ProdcutCard'


function ProductList() {
  
  const dispatch=useDispatch()
  useEffect(
    ()=>{
    dispatch(getProduct())
    }
  ,[dispatch])
 const products=useSelector(state=>state)


  return (

    <div>
      {products.map(e=>
        <ProdcutCard  props={e}/>
        )}
    </div>
  )
}

export default ProductList