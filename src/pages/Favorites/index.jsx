import React from "react";
import NavbarFourth from "../../components/NavbarFourth/NavbarFourth";
import "../Favorites/Favorites.scss";
import FavoritesCard from "../../components/FavoritesCard";
function index() {
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
            <FavoritesCard />
            <FavoritesCard />
            <FavoritesCard />
            <FavoritesCard />
            <FavoritesCard />
            <FavoritesCard />
            <FavoritesCard />
            <FavoritesCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
