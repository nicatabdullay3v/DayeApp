import React from "react";
import NavbarBabysit from "../../components/NavbarBabysit/NavbarBabysit";
import BabysitterProfilePage from "../../components/BabysitterProfilePage/BabysitterProfilePage";

let isParent = JSON.parse(localStorage.getItem("isParent"));
let isBabysitter = JSON.parse(localStorage.getItem("isBabysitter"));
let login = JSON.parse(localStorage.getItem("login"));

const Profile = () => {
  return (
    <>
      {login ? (
        <>
          <NavbarBabysit />
          <BabysitterProfilePage />
        </>
      ) : null}

      {/* {isBabysitter ? (
       <BabysitterProfilePage/>
      ) : isParent ? (
        <ParentProfilePage/>
) : null} */}
    </>
  );
};

export default Profile;
