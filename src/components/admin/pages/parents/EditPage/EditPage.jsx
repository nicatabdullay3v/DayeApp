import React, { useEffect, useState } from "react";
import {
  fetcBabysitterJobs,
  PatchParents,
} from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch, useSelector } from "react-redux";
import "./editpage.scss";
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
const EditPage = ({ editID, seteditPage }) => {
  const [parentData, setParentdata] = useState([]);

  const [selectLanguage, setSelectLanguage] = useState("");
  useEffect(() => {
    axios("http://localhost:3000/babysitterswanted/").then((res) => {
      // console.log(res.data);
      setParentdata(res.data);
    });
  }, []);
  const ParentsData = useSelector(
    (state) => state.babysitters.babysitterswanted
  );
  const currentlySister = ParentsData.find((elem) => elem.id === editID);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetcBabysitterJobs(editID));
  }, [dispatch, editID]);
  const handleChangeLanguage = (event) => {
    setSelectLanguage(event.target.value);
  };
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   address: "",
  //   numberofChildren: "",
  //   childrenAge: "",
  //   description: "",
  //   // about: "",
  // });

  // useEffect(() => {
  //   if (currentlySister) {
  //     setFormData({
  //       firstName: currentlySister.firstName,
  //       lastName: currentlySister.lastName,
  //       email: currentlySister.email,
  //       address: currentlySister.address,
  //       numberofChildren: currentlySister.numberofChildren,
  //       childrenAge: currentlySister.childrenAge,
  //       description: currentlySister.description,
  //     });
  //   }
  // }, [currentlySister]);

  // const handleEdit = () => {
  //   const updatedData = {
  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     email: formData.email,
  //     address: formData.address,
  //     numberofChildren: formData.numberofChildren,
  //     childrenAge: formData.childrenAge,
  //     description: formData.description,
  //   };
  //   axios
  //     .patch(`http://localhost:3000/babysitterswanted/${editID}`, updatedData)
  //     .then(dispatch(fetcBabysitterJobs()));
  //   seteditPage(false);
  // };

  const formik = useFormik({
    initialValues: {
       firstName: currentlySister.firstName || "",
      lastName: currentlySister.lastName || "",
      address: currentlySister.address || "",
      numberofChildren: currentlySister.numberofChildren || "",
      childrenAge: currentlySister.childrenAge || "",
      email: currentlySister.email || "",
      // password: "",
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
      email: Yup.string().email("Invalid email").required("Required"),
      address: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Required"),
      description: Yup.string()
        .max(200, "Must be 200 characters or less")
        .min(50, "Must be 50 characters or more")

        .required("Required"),
        numberofChildren: Yup.number().min(0).positive().required("Required"),
      childrenAge: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      let find = parentData.find((elem) => elem.email == values.email);
      if (!find) {
        let obj = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          address: values.address,
          numberofChildren: values.numberofChildren,
          childrenAge: values.childrenAge,
          description: values.description,
          Languages: values.language,
        };
        console.log(obj);
        axios.patch(`http://localhost:3000/babysitterswanted/${editID}`, obj).then(() => {
          dispatch(fetcBabysitterJobs());
          setcreatePage(false);
        });
      } else {
        alert("this email already used");
      }
    },
  });

  return (
    <section id="edit_page_parent">
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
                  <b>Email:</b>
                  <span>{currentlySister.email}</span>
                </div>
                <div className="currently_span">
                  <b>Address:</b>
                  <span>{currentlySister.address}</span>
                </div>
                <div className="comments_span">
                  <b>Child:</b>
                  <p>{currentlySister.numberofChildren}</p>
                </div>
                <div className="comments_span">
                  <b>ChildAge:</b>
                  <p>{currentlySister.childrenAge}</p>
                </div>
                <div className="description_span">
                  <b>Description:</b>
                  <p>{currentlySister.description}</p>
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

                <div className="addresss_input" style={{ width: "300px" , marginTop:"20px"}}>
  <TextField
    fullWidth
    id="address"
    name="address"
    label="Address"
    type="text"
    value={formik.values.address}
    onChange={formik.handleChange}
    error={formik.touched.address && Boolean(formik.errors.address)}
    helperText={formik.touched.address && formik.errors.address}
  />
</div>

<div className="childrenn_input" style={{ width: "300px" , marginTop:"20px"}}>
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
<div className="childAgee_input" style={{ width: "300px" , marginTop:"20px"}}>
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
  );
};

export default EditPage;
