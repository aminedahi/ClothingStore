import React, { useEffect, useReducer, } from 'react'
import axios from 'axios'
import logger from 'use-reducer-logger'
import Product from './Product';

const reducer = (state ,action)=>{
  switch(action.type){
    case "FETCH_REQUEST":
      return{ ...state,loading:true,error:''}
    case "FETCH_SUCCESS":
      return{...state,loading:false,products:action.payload,error:''}
    case "FETCH_FAIL":
      return{...state,loading:false,error:action.paylod}
    default:
      return state
  }
};
export default function Homescreen() {


  const [{products,loading,error},dispatch]=useReducer(logger(reducer),
  {products:[],loading:false,error:''});

  useEffect(()=>{
    const fetchProducts=async()=>{
      dispatch({type:"FETCH_REQUEST"})
      try{
      const res=await axios.get('/api/products')
      dispatch({type:"FETCH_SUCCESS",payload:res.data})
      }catch(err){
        dispatch({type:"FETCH_FAIL",payload:err.message});
      }
    };
    fetchProducts();
  },[]);
  return (
    <div>
        <h2>List of Product</h2>
        {
          loading?(<div>loading</div>):
          error?(<div>Error</div>):
          (
        
        <div className="container">
            <div className="row">

            {  products.map((product)=>(
                <Product product={product}/>
          ))}
            </div>
        </div>)}
    </div>
  )
}
