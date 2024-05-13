import React from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './Pages/Homepage'
import Products from './Pages/Products'
import Card from './components/Card'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import SignupForm from './Pages/Register'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Aboutus from './Pages/Aboutus'
import Test from './components/Test'






const Myroute = () => {
  return (
   <Router>


    <Routes>


      <Route path='/' element={<Layout/>}> 

      <Route index element={<Homepage/>}/>
      <Route path='products' element={<Products/>}/>
      {/* <Route path='card' element={<Card/>}/> */}
      <Route path='products/:productdetails/:deepid' element={<ProductDetails/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='aboutus' element={<Aboutus/>}/>
      <Route path='test' element={<Test/>}/>
   
      </Route>


    </Routes>


   </Router>
  )
}

export default Myroute