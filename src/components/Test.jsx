import React from 'react'

import styles from '../css/aboutus.module.css'



const Test = () => {
  return (
    <div className='container'>
        <h2 className='text-center text-success text-capitalize mt-3'>This is For Testing custom css Styling for Particular Components</h2>

     <div className="row row-cols-3">
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus beatae odit aspernatur assumenda vitae, alias totam quasi aliquam rerum nulla dolore non dignissimos ad, veniam inventore doloremque voluptatem at? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor numquam perferendis repellendus veritatis ad magni nihil commodi, ex ut dignissimos beatae libero voluptatibus tenetur eius repudiandae nobis, molestias rem.</p>
        </div>
        <div className="col">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus beatae odit aspernatur assumenda vitae, alias totam quasi aliquam rerum nulla dolore non dignissimos ad, veniam inventore doloremque voluptatem at? Lorem</p>
        </div>
        <div className="col">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus beatae odit aspernatur assumenda vitae, alias totam quasi aliquam rerum nulla dolore non dignissimos ad, veniam inventore doloremque voluptatem at? Lorem</p>
        </div>
     </div>
    </div>
  )
}

export default Test