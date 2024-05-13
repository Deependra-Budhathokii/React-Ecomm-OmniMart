import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import axios from 'axios';

const Products = () => {
  const[product,setproducts] = useState([])
  
  useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
  .then(res=>{
    setproducts(res.data)
  }).catch(err=>console.log(err))
  
   
  },[])
  
  
  return (
    <>
   <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    
      {
        product.map((item)=>(
         <Card datas = {item}/>
        ))
      }
      
      </div>
      </div>  
        
    </>
  )
}

export default Products

