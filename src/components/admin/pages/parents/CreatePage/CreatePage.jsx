import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./CreatePage.scss";
import * as Yup from "yup";
// import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import YupPassword from "yup-password";
YupPassword(Yup);

import { fetcBabysitterJobs } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";


const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  address: Yup.string()
  .min(10, "Must be 10 characters or more")
  .required("Required"),
description: Yup.string()
  .max(300, "Must be 300 characters or less")
  .min(100, "Must be 100 characters or more")

  .required("Required"),
numberofchildren: Yup.string().required("Required"),
childrenAge: Yup.string().required("Required"),
password: Yup.string()
  .min(
    8,
    "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
  )
  .minLowercase(1, "password must contain at least 1 lower case letter")
  .minUppercase(1, "password must contain at least 1 upper case letter")
  .minNumbers(1, "password must contain at least 1 number")
  .minSymbols(1, "password must contain at least 1 special character")
  .required("Required"),
});


const CreatePage = ({ setcreatePage }) => {
  const dispatch = useDispatch();

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   address: "",
  //   numberofChildren: 0,
  //   childrenAge: "",
  //   description: "",
    // references: "",
    // activities: "",
  // });

  // const handleCreate = () => {
  //   const newObject = {
  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     email: formData.email,
  //     password: formData.password,
  //     address: formData.address,
  //     numberofChildren: formData.numberofChildren,
  //     childrenAge: formData.childrenAge,
  //     description: formData.description,
  //     // references: formData.references,
  //     // activities: formData.activities,
  //   };

  //   axios
  //     .post(`http://localhost:3000/babysitterswanted/`, newObject)
  //     .then(dispatch(fetcBabysitterJobs()));
  //   setcreatePage(false);
  // };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (values) => {
  //   console.log("salam")
  //   axios.post(`http://localhost:3000/babysitterswanted/`, values)
  //     .then(() => {
  //       dispatch(fetcBabysitterJobs());
  //       setcreatePage(false);
  //     })
  // };

// formik





  return (
    <section id="create_pagee">
      <div className="container">
        <h1 className="change_size">Create Parent</h1>

        <div className="create_sides">
          <div className="right_side_create">

          <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                address: '',
                numberofChildren: '',
                childrenAge: '',
                description: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={values=>{
                axios.post(`http://localhost:3000/babysitterswanted/`, values)
                .then(() => {
                  dispatch(fetcBabysitterJobs());
                  setcreatePage(false);
                })
              }}
            >
             {({ errors, touched }) => (



            <div className="create_to">
              <div className="card_parent">
              <Form>
                <div className="firstname_input">
                  <label htmlFor="firstName">firstName:</label>
          
                   <Field type="text" name="firstName" placeholder="Name" />
                    <ErrorMessage name="firstName" />
                </div>

                <div className="lastname_input">
                  <label htmlFor="lastName">lastName:</label>
            
                    <Field type="text" name="lastName" placeholder="lastName" />
                    <ErrorMessage name="lastName" />
                </div>

                <div className="email_input">
                  <label htmlFor="email">Email:</label>
            
                           <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" />
                </div>

                
                <div className="lastname_input">
                  <label htmlFor="password">Password:</label>
          

<Field type="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password" />
                </div>

                <div className="address_input">
                  <label htmlFor="address">Address:</label>
           

<Field type="text" name="address" placeholder="Address" />
                    <ErrorMessage name="address" />
                </div>

                <div className="child_input">
                  <label htmlFor="numberofChildren">Child:</label>
            

<Field type="number" name="numberofChildren" placeholder="Child" />
                    <ErrorMessage name="numberofChildren" />
                </div>

                <div className="age_input">
                  <label htmlFor="childrenAge">Age: </label>
        

<Field type="text" name="childrenAge" placeholder="Age Children" />
                    <ErrorMessage name="childrenAge" />
                </div>

                <div className="description_input">
                  <label htmlFor="description">Description:</label>
         

<Field
  as="textarea"
  name="description"
  id="description"
  cols="40"
  rows="5"
  placeholder="At least 100 characters"
/>
<ErrorMessage name="description" />
                </div>

         

                <div className="create_btn">
                    <button type="submit">Create</button>
                  </div>
</Form>
              </div>
              </div>
)}
            </Formik>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePage;
