import React, { useEffect, useState } from "react";
import {
  fetchUserById,
  fetcBabysitterJobs,
} from "../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

YupPassword(Yup);
import "../../../components/admin/pages/babysitters/EditPage/EditPage.scss";

import { useDispatch, useSelector } from "react-redux";
const EditProfilePage = ({ editID, seteditPage }) => {
  let isBabySitters = JSON.parse(localStorage.getItem("isBabysitter"));
  let isParent = JSON.parse(localStorage.getItem("isParent"));
  let login = JSON.parse(localStorage.getItem("login"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById(login.id));
  }, [dispatch, login.id]);

  useEffect(() => {
    dispatch(fetcBabysitterJobs(login.id));
  }, [dispatch, login.id]);

  const formik = useFormik({
    initialValues: {
      firstName: login.firstName || "",
      lastName: login.lastName || "",
      age: login.age || "",
      country: login.country || "",
      price: login.price || "",
      email: login.email || "",
      password: "",
      activities: login.activities || "",
      references: login.references || "",
      description: login.description || "",

      address: login.address || "",
      numberofChildren: login.numberofChildren || "",
      childrenAge: login.childrenAge || "",
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
      address: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Required"),
      numberofChildren: Yup.number().min(0).positive().required("Required"),
      childrenAge: Yup.string().required("Required"),
      age: Yup.number().min(0).positive().required("Required"),
      price: Yup.number().min(0).positive().required("Required"),
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
        age: values.age,
        email: values.email,
        price: values.price,
        password: values.password,
        references: values.references,
        activities: values.activities,
        description: values.description,
      };
      let objParent = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        address: values.address,
        numberofChildren: values.numberofChildren,
        childrenAge: values.childrenAge,
        description: values.description,
      };

      console.log(obj);
      axios.post(`http://localhost:3000/babysitters/`, obj).then(() => {
        dispatch(fetchUserById());
      });
      console.log(objParent);
      axios.post(`http://localhost:3000/babysitters/`, obj).then(() => {
        dispatch(fetcBabysitterJobs());
      });
    },
  });

  return (
    <>
      {isBabySitters ? (
        <section id="edit_page_sister">
          <div className="container">
            <h1 className="change_size">Edit {login.firstName}</h1>
            <div className="sides_edit">
              {login ? (
                <div className="currently_data">
                  <h2>Currently</h2>
                  <div className="card_parent_currently">
                    <div className="currently_p">
                      <b>firstName:</b>
                      <span>{login.firstName}</span>
                    </div>
                    <div className="currently_span">
                      <b>lastName:</b>
                      <span>{login.lastName}</span>
                    </div>

                    <div className="currently_span">
                      <b>Age:</b>
                      <span>{login.age}</span>
                    </div>

                    <div className="currently_span">
                      <b>Email:</b>
                      <span>{login.email}</span>
                    </div>

                    <div className="currently_span">
                      <b>Country:</b>
                      <span>{login.country}</span>
                    </div>

                    <div className="currently_span">
                      <b>Price:</b>
                      <span>Hour {login.price}$</span>
                    </div>

                    <div className="description_span">
                      <b>Description:</b>
                      <p>{login.description}</p>
                    </div>
                    <div className="comments_span">
                      <b>References:</b>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Expedita unde quas velit eveniet blanditiis.
                      </p>
                    </div>

                    <div className="comments_span">
                      <b>Activities:</b>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Expedita unde quas velit eveniet blanditiis.
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
                    <div
                      className="firstNamee_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        type="text"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                      />
                    </div>

                    <div
                      className="lastNamee_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                      />
                    </div>

                    <div
                      className="password_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type={formik.values.showPassword ? "text" : "password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  formik.setFieldValue(
                                    "showPassword",
                                    !formik.values.showPassword
                                  )
                                }
                                onMouseDown={(e) => e.preventDefault()}
                              >
                                {formik.values.showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>

                    <div
                      className="agesisterss_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="age"
                        name="age"
                        label="Age"
                        type="text"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        error={formik.touched.age && Boolean(formik.errors.age)}
                        helperText={formik.touched.age && formik.errors.age}
                      />
                    </div>

                    <div
                      className="emaill_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </div>

                    <div
                      className="countryss_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="country"
                        name="country"
                        label="Country"
                        type="text"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.country &&
                          Boolean(formik.errors.country)
                        }
                        helperText={
                          formik.touched.country && formik.errors.country
                        }
                      />
                    </div>

                    <div
                      className="pricee_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="price"
                        name="price"
                        label="Price"
                        type="number"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.price && Boolean(formik.errors.price)
                        }
                        helperText={formik.touched.price && formik.errors.price}
                      />
                    </div>

                    <div
                      className="descriptionn_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="description"
                        name="description"
                        label="Description"
                        type="text"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.description &&
                          Boolean(formik.errors.description)
                        }
                        helperText={
                          formik.touched.description &&
                          formik.errors.description
                        }
                      />
                    </div>

                    <div
                      className="commentss_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="references"
                        name="references"
                        label="References"
                        type="text"
                        value={formik.values.references}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.references &&
                          Boolean(formik.errors.references)
                        }
                        helperText={
                          formik.touched.references && formik.errors.references
                        }
                      />
                    </div>

                    <div
                      className="commentss_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="activities"
                        name="activities"
                        label="Activities"
                        type="text"
                        value={formik.values.activities}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.activities &&
                          Boolean(formik.errors.activities)
                        }
                        helperText={
                          formik.touched.activities && formik.errors.activities
                        }
                      />
                    </div>

                    <div className="edit_btn">
                      <button type="submit">Edit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isParent ? (
        <section id="edit_page_parent">
          <div className="container">
            <h1 className="change_size">Edit {login.firstName}</h1>
            <div className="sides_edit">
              {login ? (
                <div className="currently_data">
                  <h2>Currently</h2>
                  <div className="card_parent_currently">
                    <div className="currently_p">
                      <b>firstName:</b>
                      <span>{login.firstName}</span>
                    </div>
                    <div className="currently_span">
                      <b>lastName:</b>
                      <span>{login.lastName}</span>
                    </div>
                    <div className="currently_span">
                      <b>Email:</b>
                      <span>{login.email}</span>
                    </div>
                    <div className="currently_span">
                      <b>Address:</b>
                      <span>{login.address}</span>
                    </div>
                    <div className="comments_span">
                      <b>Child:</b>
                      <p>{login.numberofChildren}</p>
                    </div>
                    <div className="comments_span">
                      <b>ChildAge:</b>
                      <p>{login.childrenAge}</p>
                    </div>
                    <div className="description_span">
                      <b>Description:</b>
                      <p>{login.description}</p>
                    </div>
                    {/* <div className="comments_span">
            <b>About:</b>
            <p>{currentlySister.about}</p>
          </div> */}
                  </div>
                </div>
              ) : (
                console.log("not found sister")
              )}
              <div className="change_to">
                <h2>Change to</h2>
                <div className="card_parent">
                  <form onSubmit={formik.handleSubmit} action="">
                    <div
                      className="firstNamee_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        type="text"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                      />
                    </div>

                    <div
                      className="lastNamee_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                      />
                    </div>

                    <div
                      className="emaill_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </div>

                    <div
                      className="addresss_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="address"
                        name="address"
                        label="Address"
                        type="text"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.address &&
                          Boolean(formik.errors.address)
                        }
                        helperText={
                          formik.touched.address && formik.errors.address
                        }
                      />
                    </div>

                    <div
                      className="childrenn_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="numberofChildren"
                        name="numberofChildren"
                        label="Child"
                        type="text"
                        value={formik.values.numberofChildren}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.numberofChildren &&
                          Boolean(formik.errors.numberofChildren)
                        }
                        helperText={
                          formik.touched.numberofChildren &&
                          formik.errors.numberofChildren
                        }
                      />
                    </div>
                    <div
                      className="childAgee_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="childrenAge"
                        name="childrenAge"
                        label="Age Children"
                        type="text"
                        value={formik.values.childrenAge}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.childrenAge &&
                          Boolean(formik.errors.childrenAge)
                        }
                        helperText={
                          formik.touched.childrenAge &&
                          formik.errors.childrenAge
                        }
                      />
                    </div>

                    <div
                      className="descriptionn_input"
                      style={{ width: "300px", marginTop: "20px" }}
                    >
                      <TextField
                        fullWidth
                        id="description"
                        name="description"
                        label="Description"
                        type="text"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.description &&
                          Boolean(formik.errors.description)
                        }
                        helperText={
                          formik.touched.description &&
                          formik.errors.description
                        }
                      />
                    </div>

                    {/* <div className="comments_input">
          <label htmlFor="about">About:</label>
          <textarea
            name="about"
            id="about"
            cols="40"
            rows="5"
            placeholder="At least 200 characters"
            value={formData.about}
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
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
      ) : null}
    </>
  );
};

export default EditProfilePage;
