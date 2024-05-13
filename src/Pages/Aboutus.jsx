import React from 'react'
import styles from '../css/aboutus.module.css'

const Aboutus = () => {
  return (
    <div className="container py-5">
    <h1 className="text-center mb-5">About Us</h1>
    <p className='mb-5 fst-italic'>At OmniMart, we believe in the power of diversity and convenience. Our mission is simple: to provide shoppers with a seamless and comprehensive online shopping experience, offering a wide array of products ranging from fashion to electronics, all under one virtual roof.</p>

    <div className="row">
      <div className="col-md-6">
        <h2>Our Company</h2>
        <p className={styles.text_align} >Founded with a vision to revolutionize the way people shop online, OmniMart is more than just an ecommerce platform - it's a destination where quality meets convenience. Whether you're searching for the latest fashion trends, upgrading your tech gadgets, or accessorizing your home, OmniMart is here to fulfill all your needs and desires.</p>

        <p>Driven by innovation and a commitment to customer satisfaction, we strive to exceed expectations at every turn. With a user-friendly interface, secure payment options, and efficient delivery services, we ensure a hassle-free shopping experience for our valued customers.</p>
      </div>

      <div className="col-md-6">
        <img src="/public/images/Omart-gpt-4.webp" alt="Company" className="img-fluid rounded"/>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-md-6 order-md-2">
        <h2>Our Team</h2>
        <p c>Behind every successful venture lies a dedicated team of individuals passionate about their craft. At OmniMart, our team comprises talented professionals from diverse backgrounds, united by a common goal: to redefine online shopping and set new industry standards.</p>

        <p>From our diligent customer support representatives to our tech-savvy developers and creative marketers, each member of the OmniMart team plays a vital role in bringing our vision to life. Together, we work tirelessly to curate the finest selection of products, optimize the shopping experience, and build lasting relationships with our customers.</p>

        <p>Driven by integrity, creativity, and a relentless pursuit of excellence, our team is the heart and soul of OmniMart. We are committed to continuously improving and evolving, ensuring that OmniMart remains your ultimate destination for all your shopping needs.</p>

        <p>Thank you for choosing OmniMart. We look forward to serving you and exceeding your expectations every step of the way.</p>
      </div>
      <div className="col-md-6 order-md-1">
        <img src="/public/images/team.jpeg" alt="Team" className="img-fluid rounded" />
      </div>
    </div>
  </div>
  )
}

export default Aboutus