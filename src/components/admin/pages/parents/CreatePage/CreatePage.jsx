import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./CreatePage.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
YupPassword(Yup);

import { fetcBabysitterJobs } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";

const SignupSchema = Yup.object().shape({});

const CreatePage = ({ setcreatePage }) => {
  const [parentData, setParentdata] = useState([]);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  useEffect(() => {
    axios("http://localhost:3000/babysitterswanted/").then((res) => {
      // console.log(res.data);
      setParentdata(res.data);
    });
  }, []);

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

  // formik\

  ///fatime

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      numberofChildren: "",
      childrenAge: "",
      description: "",
      // image: null,
      image: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      image: Yup.string().url("Invalid URL").required("Image URL is required"),
      address: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Required"),
      description: Yup.string()
        .max(200, "Must be 200 characters or less")
        .min(50, "Must be 50 characters or more")

        .required("Required"),

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
    }),
    onSubmit: (values) => {
      let find = parentData.map((elem) => elem.email == values.email);
      if (!find) {
        let obj = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          address: values.address,
          numberofChildren: values.numberofChildren,
          childrenAge: values.childrenAge,
          description: values.description,
          image: values.image,
        };
        console.log(obj);
        axios.post(`http://localhost:3000/babysitterswanted/`, obj).then(() => {
          dispatch(fetcBabysitterJobs());
          setcreatePage(false);
        });
      } else {
        alert("this email already used");
      }
    },
  });

  // const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   setImage(selectedImage);
  //   formik.setFieldValue("image", selectedImage);
  // };

  return (
    <section id="create_pagee">
      <div className="container">
        <h1 className="change_size">Create Parent</h1>

        <div className="create_sides">
          <div className="right_side_create">
            <div className="create_to">
              <div className="card_parent">
                <form onSubmit={formik.handleSubmit} action="">
                  <div className="firstname_input">
                    <label htmlFor="firstName">firstName:</label>

                    <input
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      type="text"
                      name="firstName"
                      placeholder="Name"
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </div>

                  <div className="lastname_input">
                    <label htmlFor="lastName">lastName:</label>

                    <input
                      value={formik.values.lastName}
                      type="text"
                      onChange={formik.handleChange}
                      name="lastName"
                      placeholder="lastName"
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                    {/* <ErrorMessage name="lastName" /> */}
                  </div>

                  <div className="email_input">
                    <label htmlFor="email">Email:</label>

                    <input
                      value={formik.values.email}
                      type="email"
                      onChange={formik.handleChange}
                      name="email"
                      placeholder="Email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.email}
                      </div>
                    ) : null}
                    {/* <ErrorMessage name="email" /> */}
                  </div>

                  <div className="lastname_input">
                    <label htmlFor="password">Password:</label>

                    <input
                      value={formik.values.password}
                      type="password"
                      name="password"
                      onChange={formik.handleChange}
                      placeholder="Password"
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.password}
                      </div>
                    ) : null}
                    {/* <ErrorMessage name="password" /> */}
                  </div>

                  <div className="address_input">
                    <label htmlFor="address">Address:</label>

                    <input
                      value={formik.values.address}
                      type="text"
                      onChange={formik.handleChange}
                      name="address"
                      placeholder="Address"
                    />
                    {formik.touched.address && formik.errors.address ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.address}
                      </div>
                    ) : null}
                    {/* <ErrorMessage name="address" /> */}
                  </div>

                  <div className="child_input">
                    <label htmlFor="numberofChildren">Child:</label>

                    <input
                      value={formik.values.numberofChildren}
                      type="text"
                      onChange={formik.handleChange}
                      name="numberofChildren"
                      placeholder="Child"
                    />
                    {formik.touched.numberofChildren &&
                    formik.errors.numberofChildren ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.numberofChildren}
                      </div>
                    ) : null}
                    {/* <ErrorMessage name="numberofChildren" /> */}
                  </div>

                  <div className="age_input">
                    <label htmlFor="childrenAge">Age: </label>

                    <input
                      value={formik.values.childrenAge}
                      type="text"
                      name="childrenAge"
                      onChange={formik.handleChange}
                      placeholder="Age Children"
                    />
                    {formik.touched.childrenAge && formik.errors.childrenAge ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.childrenAge}
                      </div>
                    ) : null}
                    {/* <ErrorMessage name="childrenAge" /> */}
                  </div>

                  <div className="image_input">
                    <label htmlFor="image">Image:</label>
                    <input
                      type="text"
                      id="image"
                      name="image"
                      accept="image/*"
                      placeholder="push image address"
                      value={formik.values.image}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.image && formik.errors.image ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.image}
                      </div>
                    ) : null}
                  </div>

                  <div className="description_input">
                    <label htmlFor="description">Description:</label>

                    <textarea
                      value={formik.values.description}
                      as="textarea"
                      name="description"
                      onChange={formik.handleChange}
                      id="description"
                      cols="40"
                      rows="5"
                      placeholder="At least 100 characters"
                    />
                    {formik.touched.description && formik.errors.description ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.description}
                      </div>
                    ) : null}
                    {/* <ErrorMessage name="description" /> */}
                  </div>
                  {/* <div className="image_input">
                    <label htmlFor="image">Image:</label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div> */}

                  <div className="create_btn">
                    <button type="submit">Create</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePage;
