import React from 'react'
import Cloth from '../assets/Images/clothing.png'
import Clothes from '../assets/Images/clothings.jpg'
import electronics from '../assets/Images/electronics.jpg'
import ring from '../assets/Images/ring.jpg'
import style from '../css/Carousal.module.css'
import "../css/styles.css"


const Carousal = () => {
  return (
    <>

<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={{ maxHeight: "400px" }}>
    <div className="carousel-item active" data-bs-interval="30000" >
      <img src={Cloth} className="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="30000">
      <img src={Clothes} className="d-block w-100 img-fluid " alt="..."/>
    </div>
    {/* <div className="carousel-item">
      <img src={electronics} className="d-block w-100 img-fluid " alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={ring} className="d-block w-100 img-fluid" alt="..."/>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousal