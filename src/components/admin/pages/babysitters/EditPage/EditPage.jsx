import React, { useEffect, useState } from "react";
import { fetchUserById } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
YupPassword(Yup);
import "./EditPage.scss";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useDispatch, useSelector } from "react-redux";
const EditPage = ({ editID, seteditPage }) => {
  const [sitterData, setSitterData] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/babysitters/").then((res) => {
      // console.log(res.data);
      setSitterData(res.data);
    });
  }, []);
  const babysittersData = useSelector((state) => state.babysitters.babysitters);
  console.log(babysittersData);
  const currentlySister = babysittersData.find((elem) => elem.id === editID);

  console.log(currentlySister);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById(editID));
  }, [dispatch, editID]);


  const formik = useFormik({
    initialValues: {
      firstName: currentlySister.firstName || "",
      lastName: currentlySister.lastName || "",
      age: currentlySister.age || "",
      country: currentlySister.country || "",
      price: currentlySister.price || "",
      email: currentlySister.email || "",
      // password: "",
      activities: currentlySister.activities || "",
      references: currentlySister.references || "",
      description: currentlySister.description || "",
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
    }),
    onSubmit: (values) => {
      let find = sitterData.find((elem) => elem.email == values.email);
      if (!find) {
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
        axios.patch(`http://localhost:3000/babysitters/${editID}`, obj).then(() => {
          dispatch(fetchUserById());
          setcreatePage(false);
        });
      } else {
        alert("this email already used");
      }
    },
  });

  return (
    <section id="edit_page_sister">
      <div className="container">
        <h1 className="change_size">Edit {currentlySister.firstName}</h1>
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
                  <span>{currentlySister.email}</span>
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
              <div className="firstNamee_input" style={{ width: "300px" , marginTop:"20px"}}>
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

<div className="lastNamee_input"style={{ width: "300px" , marginTop:"20px"}}>
                  <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
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

<div className="agesisterss_input" style={{ width: "300px" , marginTop:"20px"}}>
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

           
<div className="emaill_input" style={{ width: "300px" , marginTop:"20px"}}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
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

<div className="countryss_input" style={{ width: "300px" , marginTop:"20px"}}>
                  <TextField
                    fullWidth
                    id="country"
                    name="country"
                    label="Country"
                    type="text"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                    helperText={formik.touched.country && formik.errors.country}
                  />
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

<div className="pricee_input" style={{ width: "300px" , marginTop:"20px"}}>
                  <TextField
                    fullWidth
                    id="price"
                    name="price"
                    label="Price"
                    type="number"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                  />
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

<div className="descriptionn_input" style={{ width: "300px" , marginTop:"20px"}}>
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

<div className="commentss_input" style={{ width: "300px" , marginTop:"20px"}}>
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

                <div className="commentss_input" style={{ width: "300px" , marginTop:"20px"}}>
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
  );
};

export default EditPage;
