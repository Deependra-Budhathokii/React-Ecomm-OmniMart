import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const Login = () => {
  return (
   <Formik

//Validation part

initialValues={{email:'', password:''}}

validationSchema={Yup.object({

    email: Yup.string()
    .email("Invalid email address")
    .required("Email is mandatory"),

    // password:Yup.string()
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[\!\#\@\$\%\&\?])[a-zA-Z0-9\!\#\@\$\%\&\?]{8,50}$/, "Password must have at least 8 characters")
    // .required("password is Mandatory")

   
})}
   
   >


    <div className="container">
        <div className="row justify-content-center mt-3">
            <div className="col-md-5 shadow p-3">
                <h2 className='text-center text-muted'>Login</h2>

                <Form>

                {/* Email */}
                    <div className="mb-3">
                    <label htmlFor="gmail">Email</label>
                    <Field type="email" name='email' id='gmail' className='form-control' />
                    <ErrorMessage name="email" >
                        {msg=><div style={{color:'blue'}}>{msg}</div>}
                    </ErrorMessage>
                    </div>


                {/* Password */}

                    <div className="mb-3">
                    <label htmlFor="uname">Password</label>
                    <Field type="text" name='password' id='pword' className='form-control' />
                    <ErrorMessage name="password" >
                        {msg=><div style={{color:'red'}}>{msg}</div>}dd
                    </ErrorMessage>
                    </div>


                {/* Submit */}
                <div className="mt-3">
                <Field type="submit" value={"submit"} className='btn btn-success' />
                </div>

                </Form>


            </div>
        </div>
    </div>
   </Formik>
  )
}

export default Login