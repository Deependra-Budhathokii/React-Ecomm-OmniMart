import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer>
  <div className="container my-5">
      <div className="row gy-3 gy-md-0">

          <div className="col-6 col-lg-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-body-secondary">Home</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Product</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Cart</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">About</Link></li>
              </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-body-secondary">Home</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Product</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Cart</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">About</Link></li>
              </ul>
          </div>
          <div className="col-md-6 col-lg-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-body-secondary">Home</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Product</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Cart</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">About</Link></li>
              </ul>
          </div>

          <div className="col col-md-6  col-lg-5 offset-lg-1   text-center text-md-start d-flex flex-column justify-content-end justify-content-lg-start">
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>

              <form action="">
              <div className="d-flex gap-2 flex-column flex-md-row w-100">
                      <input type="email" placeholder="Email address" className="form-control"/>
                      <button className="btn btn-primary">Subscribe</button>
                  </div>
                  </form>
                 
          </div>


      </div> 
      <div className=" d-flex py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
      </div>
  </div>
</footer>
    </>
  )
}

export default Footer