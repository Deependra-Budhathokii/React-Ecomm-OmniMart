import React from 'react'
import { Link } from 'react-router-dom'


const Card = (prop) => {
const{title,id,image,description,price} = prop.datas
  return (
    <>
  
        {/* column */}
        <div className="col">
            <div className="card">
              <img src={image} className='card-img-top' alt="" />
          
            <div className="card-body">
            <h5 className='card-title'>{title}</h5>
            <h5 className="card-price mt-2 bi-currency-rupee">{price}</h5>
            <Link to={`${title}/${id}`} className='btn btn-success mt-2 pt-2'>View Details</Link>
            </div>

            </div>
        </div>
       

        
          
     
    </>
  )
}

export default Card