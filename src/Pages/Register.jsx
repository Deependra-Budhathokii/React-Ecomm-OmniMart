import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const Register = () => {
  return (
   <Formik

  //  Validation part
  
  initialValues={{fname:'', lname:'', email:'', password:'', cpassword:''}}
  validationSchema={Yup.object({

    fname:Yup.string()
    .min(3,"First name must contain atleast 3 characters")
    .max(20, "First letter must contain 20 or less characters")
    .required("First name is Mandatory"),


    lname:Yup.string()
    .min(3,"Last name must contain atleast 3 characters")
    .max(20, "Last letter must contain 20 or less characters")
    .required("Last name is Mandatory"),


    email:Yup.string()
    .email("Invalid email format")
    .required("Email is Mandatory"),

    password:Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\#\$\%\&\!\?])[a-zA-Z0-9\@\#\$\%\&\!\?]{8,50}$/,"password must be more than 8 chracters and must contain atleast one uppercase, lowecase alphabets, atleast one special characters and a number.")
    .required("Password is mandatory"),

    cpassword:Yup.string()
    .required("Confirm password is mandatory")
    .oneOf([Yup.ref("password")], "Confirm password must matched with  password")





  })}



   >

<div className="container mt-3">
<div className="row justify-content-center">

  <div className="col-md-5 shadow">
  <h2 className='text-center text-muted'>Register Form</h2>
   <Form action="">

   {/* First name */}
    <div className='mb-3'>
      <label htmlFor="fname">First Name</label>
      <Field type="text" name='fname' id='fname' className='form-control' />
      <ErrorMessage name='fname'>
      {msg=><div style={{color:'red'}}>{msg}</div>}
      </ErrorMessage>
    </div>

   {/* Last name */}
    <div className='mb-3'>
      <label htmlFor="lname">Last Name</label>
      <Field type="text" name='lname' id='lname' className='form-control' />
      <ErrorMessage name='lname'>
      {msg=><div style={{color:'red'}}>{msg}</div>}
      </ErrorMessage>
    </div>

   {/* Email */}
    <div className='mb-3'>
      <label htmlFor="email">Email</label>
      <Field type="email" name='email' id='email' className='form-control' />
      <ErrorMessage name='email'>
      {msg=><div style={{color:'red'}}>{msg}</div>}
      </ErrorMessage>
    </div>

   {/* Password */}
    <div className='mb-3'>
      <label htmlFor="password">Password</label>
      <Field type="password" name='password' id='password' className='form-control' />
      <ErrorMessage name='password'>
      {msg=><div style={{color:'red'}}>{msg}</div>}
      </ErrorMessage>
    </div>

   {/* Password */}
    <div className='mb-3'>
      <label htmlFor="cpassword">Confirm Password</label>
      <Field type="password" name='cpassword' id='cpassword' className='form-control' />
      <ErrorMessage name='cpassword'>
      {msg=><div style={{color:'red'}}>{msg}</div>}
      </ErrorMessage>
    </div>

    {/* Onsubmit */}
    <div className='mb-3'>
      <Field type="submit" value="submit" className="btn btn-primary" />
    </div>
 


   </Form>

</div>
</div>
</div>

   </Formik>
  )
}

export default Register