import React, { useEffect, useState } from "react";
import {
  fetchUserById,
  PatchSitters,
} from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch, useSelector } from "react-redux";
const EditPage = ({ seteditID, editID }) => {
  const babysittersData = useSelector((state) => state.babysitters.babysitters);
  const currentlySister = babysittersData.find((elem) => elem.id === editID);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById(editID));
  }, [dispatch, editID]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    price: "",
    description: "",
    references: "",
    activities: "",
  });

  useEffect(() => {
    if (currentlySister) {
      setFormData({
        name: currentlySister.name,
        email: currentlySister.email,
        price: currentlySister.price,
        description: currentlySister.description,
        references: currentlySister.references,
        activities: currentlySister.activities,
      });
    }
  }, [currentlySister]);

  const handleEdit = async () => {
    const updatedData = {
      name: formData.name,
      email: formData.email,
      price: formData.price,
      description: formData.description,
      references: formData.references,
      activities: formData.activities,
    };

    await dispatch(PatchSitters({ id: editID, data: updatedData }));
  };

  return (
    <section id="edit_page_parent">
      <div className="container">
        <h1 className="change_size">Edit BabySitters</h1>
        <div className="sides_edit">
          {currentlySister ? (
            <div className="currently_data">
              <h2>Currently</h2>
              <div className="card_parent_currently">
                <div className="currently_p">
                  <b>Name:</b>
                  <span>{currentlySister.name}</span>
                </div>

                <div className="currently_span">
                  <b>Email:</b>
                  <span>JohnDoe2000@gmail.com</span>
                </div>

                <div className="currently_span">
                  <b>Price:</b>
                  <span>Hour {currentlySister.price}$</span>
                </div>

                <div className="description_span">
                  <b>Description:</b>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus facere ipsa fugiat. Aspernatur, placeat.
                    Temporibus sed exercitationem voluptatum placeat iure.
                  </p>
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
              <div className="name_input">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="comments_input">
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
              </div>

              <div className="comments_input">
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
              </div>
            </div>
            <div className="edit_btn">
              <button onClick={handleEdit}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
