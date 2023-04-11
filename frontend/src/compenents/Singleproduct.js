import React from 'react'
import { useParams } from 'react-router-dom'

function Singleproduct() {
    const params = useParams();
    const  {_id}=params
  return (
    <div>
        <h1>Single Product</h1>
        <h2>{_id}</h2>
    </div>
  )
}

export default Singleproduct