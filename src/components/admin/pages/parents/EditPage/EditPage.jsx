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
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      numberofChildren: "",
      childrenAge: "",
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
      address: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Required"),
      description: Yup.string()
        .max(200, "Must be 200 characters or less")
        .min(50, "Must be 50 characters or more")

        .required("Required"),

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
        axios.post(`http://localhost:3000/babysitterswanted/`, obj).then(() => {
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

                <div className="children_input">
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
                <div className="childAge_input">
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
                <div className="childAge_input">
                  <label htmlFor="language">language</label>

                  <input
                    value={formik.values.language}
                    type="text"
                    name="language"
                    onChange={formik.handleChange}
                    placeholder="English or Russian"
                  />
                  {formik.touched.language && formik.errors.language ? (
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
