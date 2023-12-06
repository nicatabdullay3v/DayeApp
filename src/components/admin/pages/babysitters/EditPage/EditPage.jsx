import React, { useEffect, useState } from "react";
import { fetchUserById } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
YupPassword(Yup);
import "./EditPage.scss";

import { useDispatch, useSelector } from "react-redux";
const EditPage = ({ editID, seteditPage }) => {
  const babysittersData = useSelector((state) => state.babysitters.babysitters);
  const currentlySister = babysittersData.find((elem) => elem.id === editID);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById(editID));
  }, [dispatch, editID]);

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   price: "",
  //   description: "",
  //   references: "",
  //   activities: "",
  // });

  // useEffect(() => {
  //   if (currentlySister) {
  //     setFormData({
  //       firstName: currentlySister.firstName,
  //       lastName: currentlySister.lastName,
  //       age: currentlySister.age,
  //       email: currentlySister.email,
  //       country: currentlySister.country,
  //       price: currentlySister.price,
  //       description: currentlySister.description,
  //       references: currentlySister.references,
  //       activities: currentlySister.activities,
  //     });
  //   }
  // }, [currentlySister]);

  // const handleEdit = () => {
  //   const updatedData = {
  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     age: formData.age,
  //     email: formData.email,
  //     country: formData.country,
  //     price: formData.price,
  //     description: formData.description,
  //     references: formData.references,
  //     activities: formData.activities,
  //   };
  //   axios
  //     .patch(`http://localhost:3000/babysitters/${editID}`, updatedData)
  //     .then(dispatch(fetchUserById()));

  //   seteditPage(false);
  // };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      country: "",
      price: "",
      email: "",
      password: "",
      activities: "",
      references: "",
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
    }),
    onSubmit: (values) => {
      let obj = {
        firstName: values.firstName,
        lastName: values.lastName,
        country: values.country,
        age: values.age,
        email: values.email,
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
    <section id="edit_page_sister">
      <div className="container">
        <h1 className="change_size">Edit BabySitters</h1>
        <div className="sides_edit">
          {currentlySister ? (
            <div className="currently_data">
              <h2>Currently</h2>
              <div className="card_parent_currently">
                <div className="currently_p">
                  <b>firstName:</b>
                  <span>{currentlySister.firstName}</span>
                </div>
                <div className="currently_span">
                  <b>lastName:</b>
                  <span>{currentlySister.lastName}</span>
                </div>

                <div className="currently_span">
                  <b>Age:</b>
                  <span>{currentlySister.age}</span>
                </div>

                <div className="currently_span">
                  <b>Email:</b>
                  <span>JohnDoe2000@gmail.com</span>
                </div>

                <div className="currently_span">
                  <b>Country:</b>
                  <span>{currentlySister.country}</span>
                </div>

                <div className="currently_span">
                  <b>Price:</b>
                  <span>Hour {currentlySister.price}$</span>
                </div>

                <div className="description_span">
                  <b>Description:</b>
                  <p>{currentlySister.description}</p>
                </div>
                <div className="comments_span">
                  <b>References:</b>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita unde quas velit eveniet blanditiis.
                  </p>
                </div>

                <div className="comments_span">
                  <b>Activities:</b>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita unde quas velit eveniet blanditiis.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            console.log("not found sister")
          )}

          <div className="change_to">
            <h2>Change to</h2>
            <div className="card_parent">
              <form onSubmit={formik.handleSubmit} action="">
                <div className="firstName_input">
                  <label htmlFor="firstName">firstName:</label>

                  <input
                    // value={formData.firstName}
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

                {/* <div className="firstName_input">
                <label htmlFor="firstName">firstName:</label>

                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div> */}

                <div className="lastName_input">
                  <label htmlFor="lastName">lastName:</label>

                  <input
                    // value={formData.lastName}
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

                {/* <div className="lastName_input">
                <label htmlFor="lastName">lastName:</label>

                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div> */}

                <div className="agesisters_input">
                  <label htmlFor="age">Age: </label>

                  <input
                    // value={formData.age}
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

                {/* 
              <div className="agesisters_input">

                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                />
              </div> */}

                <div className="email_input">
                  <label htmlFor="email">Email:</label>

                  <input
                    // value={formData.email}
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

                {/* 
              <div className="email_input">
                <label htmlFor="emal">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div> */}

                <div className="countrys_input">
                  <label htmlFor="country">Country:</label>

                  <input
                    // value={formData.country}
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

                {/* <div className="countrys_input">
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                />
              </div> */}

                <div className="price_input">
                  <label htmlFor="price">Price:</label>

                  <input
                    // value={formData.price}
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

                {/* <div className="price_input">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div> */}

                <div className="description_input">
                  <label htmlFor="description">Description:</label>

                  <textarea
                    // value={formData.description}
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

                {/* <div className="description_input">
                <label htmlFor="description">Description:</label>
                <textarea
                  name="description"
                  id="description"
                  cols="40"
                  rows="5"
                  placeholder="At least 200 characters"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
              </div> */}

                <div className="comments_input">
                  <label htmlFor="references">References:</label>

                  <textarea
                    // value={formData.references}
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

                {/* <div className="comments_input">
                <label htmlFor="reference">References:</label>
                <textarea
                  name="reference"
                  id="reference"
                  cols="40"
                  rows="5"
                  placeholder="Your reference here"
                  value={formData.references}
                  onChange={(e) =>
                    setFormData({ ...formData, references: e.target.value })
                  }
                ></textarea>
              </div> */}

                <div className="comments_input">
                  <label htmlFor="activities">Activities:</label>

                  <textarea
                    // value={formData.activities}
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

                {/* <div className="comments_input">
                <label htmlFor="activity">Activities:</label>
                <textarea
                  name="activity"
                  id="activity"
                  cols="40"
                  rows="5"
                  placeholder="Your activity here"
                  value={formData.activities}
                  onChange={(e) =>
                    setFormData({ ...formData, activities: e.target.value })
                  }
                ></textarea>
              </div> */}
                <div className="edit_btn">
                  <button type="submit">Edit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
