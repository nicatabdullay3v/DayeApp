import React, { useState, useEffect } from "react";
import NavbarFourth from "../../components/NavbarFourth/NavbarFourth";
import "../Favorites/Favorites.scss";
import FavoritesCard from "../../components/FavoritesCard";
import { fetcBabysitterJobs } from "../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserById } from "../../redux/Slice/BabySittersSlice/BabySittersSlice";
function index() {
  const babysisters = useSelector((state)=> state.babysitters.babysitters)
  let loginBabysitter = JSON.parse(localStorage.getItem("login")) || []
  let babysitter = babysisters.find((x)=> x.id == loginBabysitter.id )
  console.log(babysitter?.wishList);
  const loginParent = JSON.parse(localStorage.getItem("login")) || []
  useEffect(() => {
    
  dispatch(fetchUserById())
    
  }, [])
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetcBabysitterJobs());
  }, []);
console.log(babysitter?.wishList);
  let parents = useSelector((state) => state.babysitters.babysitterswanted);
  let parent = parents.find((x) => x.id == loginParent.id);
  let isBabysitter = JSON.parse(localStorage.getItem("isBabysitter")) || []
  console.log(isBabysitter);
  let isParent = JSON.parse(localStorage.getItem("isParent")) || []
  console.log(parent);
  return (
    <div>
      <NavbarFourth />
      <div className="container">
        <div className="fav-head">
          <div className="head-text">
            <h1>Favorites</h1>
          </div>
          <div className="favoritedFriend">
            <p>Favorited by your friends</p>
            <button>Connect with Facebook</button>
          </div>
        </div>
        <div className="my-favorites">
          <div className="text">My Favorites</div>
          <div className="favorites-box">
        {isParent === true?     parent?.wishList &&
              parent?.wishList.map((elem) => {
                return <FavoritesCard elem={elem} />;
              }) : null }

              {isBabysitter === true? babysitter?.wishList && babysitter?.wishList.map(elem=>{
                return <FavoritesCard elem={elem}/>
              }): null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
