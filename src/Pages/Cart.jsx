import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const Cart = () => {

const[product,setProduct] = useState([])
const cartData = JSON.parse(localStorage.getItem('CartData')) || []

useEffect(()=>{
    setProduct(cartData)

},[])



// For incrementing the quantity in the Cart Item
const increaseQty = (id) =>{
    const updateProducts = product.map(item=>{
        if(item.id===id){
            return{...item, quantity:++item.quantity}
        }
        return item
    })

    setProduct(updateProducts)
    localStorage.setItem('CartData', JSON.stringify(updateProducts))

}

// For decrementing the quantity in the Cart Item
const decreaseQty = (id) =>{
    const updateProducts = product.map(item=>{
        if(item.id===id && item.quantity>1){
            return{...item, quantity:item.quantity-1}
        }
        return item
    })

    setProduct(updateProducts)
    localStorage.setItem('CartData', JSON.stringify(updateProducts))

}


// For Deleting the items from the Cart /Remove Items   
// *** we use FILTER METHOD*** to delete the item
const deleteCartItem = (id,name) =>{

    const isConfirmed = window.confirm("Are you sure you want to delete this Item");

    if(isConfirmed){

        const filterProducts = product.filter(item=>item.id!==id) //main logic

        setProduct(filterProducts)
        localStorage.setItem('CartData', JSON.stringify(filterProducts))
        toast.success(`${name} has been successfully removed from the cart`)

    } 
        
    }

    



  return (
    <>
    <ToastContainer/>
    <div className="container">
    <div className="row">
       {
        product.length===0 ? <h1>Your cart is Empty</h1> : (
            <>
            <h2 className='text-center mt-2'>Your Cart Items</h2>
             <div className="col-lg-8 shadow px-4 mb-5 mb-lg-0">
                {
                    product.map((item,i)=>(
                        <div key={i}>
                            <div className="row align-items-center justify-content-center mt-3">
                                <div className="col-2"><img src={item.image} className='img-fluid' width={200} alt="" /></div>
                                <div className="col-4">
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="col-2">
                                    <h4 className="text-warning  bi-currency-rupee">{item.price}</h4>
                                </div> 
                                <div className="col-2 d-flex align-items-center column-gap-1">
                                    <button className='btn btn-primary d-inline' onClick={()=>decreaseQty(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button className='btn btn-primary d-inline' onClick={()=>increaseQty(item.id)}>+</button>
                                </div>

                                <div className="col-1">
                                    <button className='btn btn-danger' onClick={()=>deleteCartItem(item.id, item.title)}><FaTrash /></button>
                                </div>

                            </div>
                        </div>
                    ))
                }
             </div>

             <div className="col-lg-3 ms-lg-4">
                <h3>Cart Summary</h3>
                <hr/>
                <h5 className=''>quantity: {
                    product.reduce((ac,item)=>
                    (ac+=item.quantity),0
                    )
                }</h5>
                <hr />
                <h5>Price: {
                    product.reduce((ac,item)=>{
                        return ac+(item.price)*item.quantity
                    },0).toFixed(2)
                }</h5>
                <hr />
                <button className='btn btn-warning mt-2'>Check Out</button>
                
             </div>

                
            </>
        )
  
       }  
                </div>
            </div>
    </>
  )
}

export default Cart