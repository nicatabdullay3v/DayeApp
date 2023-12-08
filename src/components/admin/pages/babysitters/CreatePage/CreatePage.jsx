import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import "./createPage.scss";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
YupPassword(Yup);
import { fetchUserById } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { Language } from "@mui/icons-material";
const CreatePage = ({ setcreatePage }) => {
  const [drive, setDrive] = useState("secilmedi");
  const [selectLanguage, setSelectLanguage] = useState("");
  const [haveCar, setHaveCar] = useState("secilmedi");
  const [haveChild, setHaveChild] = useState("secilmedi");
  const [smoke, setSmoke] = useState("secilmedi");
  const [location, setLocation] = useState("");

  console.log(drive);
  const [sitterData, setSitterData] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/babysitters/").then((res) => {
      // console.log(res.data);
      setSitterData(res.data);
    });
  }, []);
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeLanguage = (event) => {
    setSelectLanguage(event.target.value);
  };
  console.log(location);
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
      age: Yup.number().min(0).positive().required("Required"),
      image: Yup.string().url("Invalid URL").required("Image URL is required"),
      email: Yup.string().email("Invalid email").required("Required"),
      country: Yup.string().required("Required"),
      price: Yup.number().min(0).positive().required("Required"),

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
      let find = sitterData.find((elem) => elem.email == values.email);
      if (
        !find &&
        drive !== "secilmedi" &&
        haveChild !== "secilmedi" &&
        location &&
        selectLanguage &&
        haveCar !== "secilmedi" &&
        smoke !== "secilmedi"
      ) {
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
          image: values.image,
          driverLicense: drive,
          Haschildren: haveChild,
          location: location,
          Languages: selectLanguage,
          car: haveCar,
          smoker: smoke,
        };
        console.log(obj);
        axios.post(`http://localhost:3000/babysitters/`, obj).then(() => {
          dispatch(fetchUserById());
          setcreatePage(false);
        });
      } else {
        alert("this username already in use!");
      }
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

                  <div className="agesister_input">
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

                  <div className="country_input">
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
                      helperText={
                        formik.touched.country && formik.errors.country
                      }
                    />
                  </div>

                  <div className="price_input">
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
                  <div className="price_input">
                    <FormLabel id="demo-radio-buttons-group-label">
                      Drive License
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Yes"
                        onChange={() => {
                          setDrive(true);
                        }}
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="No"
                        onChange={() => {
                          setDrive(false);
                        }}
                      />
                    </RadioGroup>
                    {drive === "secilmedi" ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "16px",
                        }}
                      >
                        no selected
                      </div>
                    ) : null}
                  </div>
                  <div className="price_input">
                    <FormLabel id="demo-radio-buttons-group-label">
                      Have children:
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Yes"
                        onChange={() => {
                          setHaveChild(true);
                        }}
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="No"
                        onChange={() => {
                          setHaveChild(false);
                        }}
                      />
                    </RadioGroup>
                    {haveChild === "secilmedi" ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "16px",
                        }}
                      >
                        no selected
                      </div>
                    ) : null}
                  </div>
                  <div className="price_input">
                    <FormLabel id="demo-radio-buttons-group-label">
                      Preferred babysitting location
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="At the babysitters's"
                        control={<Radio />}
                        label="At the babysitters's"
                        onChange={handleChangeLocation}
                      />
                      <FormControlLabel
                        value="At the my home"
                        control={<Radio />}
                        label="At the my home"
                        onChange={handleChangeLocation}
                      />
                    </RadioGroup>
                    {!location ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "16px",
                        }}
                      >
                        no selected
                      </div>
                    ) : null}
                  </div>
                  <div className="price_input">
                    <FormLabel id="demo-radio-buttons-group-label">
                      which language do you know better?
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="English"
                        control={<Radio />}
                        label="English"
                        onChange={handleChangeLanguage}
                      />
                      <FormControlLabel
                        value="Russian"
                        control={<Radio />}
                        label="Russian"
                        onChange={handleChangeLanguage}
                      />
                    </RadioGroup>
                    {!selectLanguage ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "16px",
                        }}
                      >
                        no selected
                      </div>
                    ) : null}
                  </div>
                  <div className="price_input">
                    <FormLabel id="demo-radio-buttons-group-label">
                      Have Car:
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Yes"
                        onChange={() => {
                          setHaveCar(true);
                        }}
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="No"
                        onChange={() => {
                          setHaveCar(false);
                        }}
                      />
                    </RadioGroup>
                    {haveCar === "secilmedi" ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "16px",
                        }}
                      >
                        no selected
                      </div>
                    ) : null}
                  </div>
                  <div className="price_input">
                    <FormLabel id="demo-radio-buttons-group-label">
                      Smoke:
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Yes"
                        onChange={() => {
                          setSmoke(true);
                        }}
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="No"
                        onChange={() => {
                          setSmoke(false);
                        }}
                      />
                    </RadioGroup>
                    {smoke === "secilmedi" ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontSize: "16px",
                        }}
                      >
                        no selected
                      </div>
                    ) : null}
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
                  <div className="comments_input">
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

                  <div className="comments_input">
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
