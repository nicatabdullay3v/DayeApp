import React, { useState, useEffect } from "react";
import NavbarFourth from "../../components/NavbarFourth/NavbarFourth";
import "../Favorites/Favorites.scss";
import FavoritesCard from "../../components/FavoritesCard";
import { fetcBabysitterJobs } from "../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useSelector, useDispatch } from "react-redux";
function index() {
  const loginParent = JSON.parse(localStorage.getItem("login"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetcBabysitterJobs());
  }, []);

  let parents = useSelector((state) => state.babysitters.babysitterswanted);
  let parent = parents.find((x) => x.id == loginParent.id);
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
            {parent?.wishList &&
              parent?.wishList.map((elem) => {
                return <FavoritesCard elem={elem} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
