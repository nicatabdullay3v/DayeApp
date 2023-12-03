import React from "react";

const AdminPage = () => {
  return (
    <section id="admin_page">
      <div className="container">
        <h1>Admin</h1>
        <div className="admin_page">
          <div className="your_profile">
            
            <div className="admin_side_to_side">
              <div className="first_side">
                <div className="circle_one circle">
                  <p>1</p>
                </div>
                <div className="for_one">
                  <p>Complete your profile</p>
                  <span>
                    Complete your profile to contact great babysitters and
                    parents.
                  </span>
                  <div className="button_for_one">
                    <button>Profile</button>
                  </div>
                </div>
              </div>

              <div className="second_side">
                <div className="circle_two circle">
                  <p>2</p>
                </div>
                <div className="for_two">
                  <p>Verify identity</p>
                </div>
              </div>

              <div className="third_side">
                <div className="circle_three circle">
                  <p>3</p>
                </div>
                <div className="for_three">
                  <p>Start Premium</p>
                </div>
              </div>

              <div className="fourth_side">
                <div className="circle_four circle">
                  <p>4</p>
                </div>
                <div className="for_four">
                  <p>Start contacting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
