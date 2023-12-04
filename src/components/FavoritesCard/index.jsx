import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "../FavoritesCard/FavoritesCard.scss";
import { fetcBabysitterJobs } from "../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
function index({elem}) {
  let dispatch = useDispatch()
 let loginParent =JSON.parse(localStorage.getItem("login"))
  const parents = useSelector((state)=> state.babysitters.babysitterswanted)
let parent =parents.find(x => x.id == loginParent.id);
  return (
    <div>
      <Link style={{ textDecoration: "none" }}>
        <div className="fav-card">
          <div className="card-left">
            <div className="image">
              <img
                src={elem.image}
                alt=""
              />
            </div>
          </div>

          <dv className="card-right">
            <div className="name">
            {elem.firstName}
              <div className="icon">
                <FontAwesomeIcon
                onClick={()=>{
                  axios.patch(`http://localhost:3000/babysitterswanted/${loginParent.id}`,{
                    wishList : parent.wishList.filter(x => x.id != elem.id)
                  }).then(dispatch(fetcBabysitterJobs()))
                }}
                  icon={faHeart}
                  style={{ color: "#59bec9", fontSize: "19px" }}
                />
              </div>
            </div>
            <div className="information">
              <div className="city">{elem.country}</div>
              <div className="review">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#59bec9", fontSize: "13px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#59bec9", fontSize: "13px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#59bec9", fontSize: "13px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#59bec9", fontSize: "13px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#59bec9", fontSize: "13px" }}
                />
                <span>1 review</span>
              </div>
              <div className="ref">2 references</div>
            </div>
          </dv>
        </div>
      </Link>
    </div>
  );
}

export default index;
