import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./createPage.scss";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
YupPassword(Yup);
import { fetchUserById } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
const CreatePage = ({setcreatePage}) => {
  const dispatch = useDispatch();
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   price: 0,
  //   description: "",
  //   references: "",
  //   activities: "",
  // });

  // const handleCreate = () => {
  //   const newObject = {
  //     name: formData.name,
  //     age: formData.age,
  //     email: formData.email,
  //     password: formData.password,
  //     country: formData.country,
  //     price: formData.price,
  //     description: formData.description,
  //     references: formData.references,
  //     activities: formData.activities,
  //   };
  //   axios
  //     .post(`http://localhost:3000/babysitters/`, newObject)
  //     .then(dispatch(fetchUserById()));
  //     setcreatePage(false);
  // };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      price: "",
      email: "",
      password: "",
      activities: "",
      references: "",
      country: "",
      description: "",
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
      country: Yup.string().required("Required"),
      description: Yup.string()
        .max(200, "Must be 200 characters or less")
        .min(50, "Must be 50 characters or more")
        .required("Required"),
        references: Yup.string()
        .max(200, "Must be 200 characters or less")
        .min(50, "Must be 50 characters or more")
        .required("Required"),
        activities: Yup.string()
        .max(200, "Must be 200 characters or less")
        .min(50, "Must be 50 characters or more")
        .required("Required"),
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
      let obj = {
        firstName: values.firstName,
        lastName: values.lastName,
        country: values.country,
        email: values.email,
        age: values.age,
        price: values.price,
        password: values.password,
        references: values.references,
        activities: values.activities,
        description: values.description,
      };
      console.log(obj);
      axios.post(`http://localhost:3000/babysitters/`, obj).then(() => {
        dispatch(fetchUserById());
        setcreatePage(false);
      });
    },
  });

  return (
    <section id="create_page">
      <div className="container">
        <h1 className="change_size">Create BabySitter</h1>

        <div className="create_sides">
          <div className="right_side_create">
            <div className="create_to">
              <div className="card_parent">



              <form onSubmit={formik.handleSubmit} action="">

              <div className="firstName_input">
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

                  
                  <div className="lastName_input">
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
                  </div>

                <div className="agesister_input">
                    <label htmlFor="age">Age: </label>

                    <input
                      value={formik.values.age}
                      type="text"
                      name="age"
                      onChange={formik.handleChange}
                      placeholder="Age"
                    />
                    {formik.touched.age && formik.errors.age ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.age}
                      </div>
                    ) : null}
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
                  </div>

                <div className="password_input">
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
                  </div>


                <div className="country_input">
                    <label htmlFor="country">Country:</label>

                    <input
                      value={formik.values.country}
                      type="text"
                      onChange={formik.handleChange}
                      name="country"
                      placeholder="country"
                    />
                    {formik.touched.country && formik.errors.country ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.country}
                      </div>
                    ) : null}
                  </div>

                <div className="price_input">
                    <label htmlFor="price">Price:</label>

                    <input
                      value={formik.values.price}
                      type="number"
                      onChange={formik.handleChange}
                      name="price"
                      placeholder="price"
                    />
                    {formik.touched.price && formik.errors.price ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.price}
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
                  </div>


                <div className="comments_input">
                    <label htmlFor="references">References:</label>

                    <textarea
                      value={formik.values.references}
                      as="textarea"
                      name="references"
                      onChange={formik.handleChange}
                      id="references"
                      cols="40"
                      rows="5"
                      placeholder="At least 100 characters"
                    />
                    {formik.touched.references && formik.errors.references ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.references}
                      </div>
                    ) : null}
                  </div>


                <div className="comments_input">
                    <label htmlFor="activities">Activities:</label>

                    <textarea
                      value={formik.values.activities}
                      as="textarea"
                      name="activities"
                      onChange={formik.handleChange}
                      id="activities"
                      cols="40"
                      rows="5"
                      placeholder="At least 100 characters"
                    />
                    {formik.touched.activities && formik.errors.activities ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "small",
                        }}
                      >
                        {formik.errors.activities}
                      </div>
                    ) : null}
                  </div>
             

       

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
