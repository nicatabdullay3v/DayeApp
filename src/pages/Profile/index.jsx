import React from 'react'
import NavbarBabysit from '../../components/NavbarBabysit/NavbarBabysit'
import ParentProfilePage from '../../components/ParentProfilePage/ParentProfilePage'
import BabysitterProfilePage from '../../components/BabysitterProfilePage/BabysitterProfilePage';

let isParent = JSON.parse(localStorage.getItem("isParent"));
let isBabysitter = JSON.parse(localStorage.getItem("isBabysitter"));



const Profile = () => {
  return (
    <>
    <NavbarBabysit/>

    {isBabysitter ? (
       <BabysitterProfilePage/>
      ) : isParent ? (
        <ParentProfilePage/>
) : null}

    </>
  )
}

export default Profile