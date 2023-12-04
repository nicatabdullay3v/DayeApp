import React from 'react'

const CreatePage = () => {
  return (

    <section id="create_page">
    <div className="container">
      <h1 className="change_size">Create Parent</h1>

      <div className="create_sides">
      
        <div className="right_side_create">
          <div className="create_to">
            <div className="card_parent">
              <div className="name_input">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>

              <div className="email_input">
                <label htmlFor="emal">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="price_input">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                />
              </div>

              <div className="child_input">
                <label htmlFor="child">Child:</label>
                <input
                  type="number"
                  name="child"
                  id="child"
                  placeholder="Child"
                />
              </div>

              
              <div className="age_input">
                <label htmlFor="age">Age: </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Age"
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
                ></textarea>
              </div>

              <div className="comments_input">
                <label htmlFor="comments">References:</label>
                <textarea
                  name="comments"
                  id="comments"
                  cols="40"
                  rows="5"
                  placeholder="Your reference here"
                ></textarea>
              </div>

              <div className="comments_input">
                <label htmlFor="comments">Activities:</label>
                <textarea
                  name="comments"
                  id="comments"
                  cols="40"
                  rows="5"
                  placeholder="Your activity here"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="create_btn">
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CreatePage