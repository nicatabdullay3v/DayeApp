import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./CreatePage.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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
      numberofChildren: Yup.number().min(0).positive().required("Required"),
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


                <div className="firstName_input">
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



                  <div className="lastName_input">
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




                  <div className="email_input">
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




                  <div className="password_input">
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


                  <div className="address_input">
                    <TextField
                      fullWidth
                      id="address"
                      name="address"
                      label="Address"
                      type="text"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.address && Boolean(formik.errors.address)
                      }
                      helperText={
                        formik.touched.address && formik.errors.address
                      }
                    />
                  </div>

                  <div className="child_input">
                    <TextField
                      fullWidth
                      id="numberofChildren"
                      name="numberofChildren"
                      label="Child"
                      type="text"
                      value={formik.values.numberofChildren}
                      onChange={formik.handleChange}
                      error={formik.touched.numberofChildren && Boolean(formik.errors.numberofChildren)}
                      helperText={formik.touched.numberofChildren && formik.errors.numberofChildren}
                    />
                  </div>


                  <div className="age_input">
                    <TextField
                      fullWidth
                      id="childrenAge"
                      name="childrenAge"
                      label="Age Children"
                      type="text"
                      value={formik.values.childrenAge}
                      onChange={formik.handleChange}
                      error={formik.touched.childrenAge && Boolean(formik.errors.childrenAge)}
                      helperText={formik.touched.childrenAge && formik.errors.childrenAge}
                    />
                  </div>



                  <div className="image_input">
                    <TextField
                      fullWidth
                      id="image"
                      name="image"
                      label="Image"
                      type="text"
                      value={formik.values.image}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.image && Boolean(formik.errors.image)
                      }
                      helperText={formik.touched.image && formik.errors.image}
                    />
                  </div>






                  <div className="description_input">
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
                        formik.touched.description && formik.errors.description
                      }
                    />
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
