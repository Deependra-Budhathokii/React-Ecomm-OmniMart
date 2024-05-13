import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from '../css/Productdetails.module.css'




const ProductDetails = () => {

const params = useParams()
const id = params.deepid

const[products,setproducts] =useState({})
useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=>setproducts(res.data))
},[id])
// const{title,image,price,description,category} =products;





// **********************
// ADD TO CART Feature
// **********************
const addToCart = () =>{
    const cartItems = JSON.parse(localStorage.getItem('CartData')) || []

    const productItems = {
        id: products.id,
        image: products.image,
        description:products.description,
        category:products.category,
        title: products.title,
        price:products.price,
        quantity:1
    }

    const isPresent = cartItems.find(item=>item.id===products.id)

    if(isPresent){
        toast.error('Product already exists in Cart');
    }else{
        cartItems.push(productItems)
        localStorage.setItem('CartData', JSON.stringify(cartItems))
        toast.success('Product added successfully in the Cart')
    }
}





return (
    <>
 <ToastContainer theme="colored" position = "top-center"/>

<div className="container">
    <div className="row py-3 justify-content-between  align-items-center">
     <div className="col-md-3">
             <img src={products.image} width={300} className='py-3 img-fluid' alt="" />
     </div>
     <div className="col-sm-8 my-3">
         
        <h1 className='mb-3 text-success'> {products.title}</h1>
        <h2 className='bi-currency-rupee text-primary fs-3 fw-bold'>{products.price}</h2>
        <p>
           {products.description}
        </p>
        <p><b>Category:</b> {products.category}</p>  
        <Link to="" className={`btn btn-warning  ${styles.hover_cart_btn_1} mt-2`} onClick={addToCart}>Add to Cart</Link>

        <Link to="/cart" className={`btn btn-primary bg-gradient ${styles.hover_cart_btn_2} mt-2 float-end`}>Cart Details</Link>


    
     </div>
          
    </div>
    </div>

    </>
  )
}

export default ProductDetails