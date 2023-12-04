import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PushBabySitters } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import "./createPage.scss";
const CreatePage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    price: 0,
    description: "",
    references: "",
    activities: "",
  });

  const handleCreate = () => {
    const newObject = {
      name: formData.name,
      email: formData.email,
      price: formData.price,
      description: formData.description,
      references: formData.references,
      activities: formData.activities,
    };

    dispatch(PushBabySitters(newObject));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="create_page">
      <div className="container">
        <h1 className="change_size">Create BabySitter</h1>

        <div className="create_sides">
          <div className="right_side_create">
            <div className="create_to">
              <div className="card_parent">
                <div className="name_input">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="email_input">
                  <label htmlFor="emal">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="price_input">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>

                <div className="description_input">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    name="description"
                    id="description"
                    cols="40"
                    rows="5"
                    placeholder="At least 200 characters"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="comments_input">
                  <label htmlFor="references">References:</label>
                  <textarea
                    name="references"
                    id="references"
                    cols="40"
                    rows="5"
                    placeholder="Your reference here"
                    value={formData.references}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="comments_input">
                  <label htmlFor="activities">Activities:</label>
                  <textarea
                    name="activities"
                    id="activities"
                    cols="40"
                    rows="5"
                    placeholder="Your activity here"
                    value={formData.activities}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="create_btn">
              <button onClick={handleCreate}>Create</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePage;
