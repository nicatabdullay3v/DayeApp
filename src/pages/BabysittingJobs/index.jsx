import React, { useEffect, useState } from "react";
import NavbarBabysit from "../../components/NavbarBabysit/NavbarBabysit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BabysittersCard from "../../components/BabysittersCard";
import NavbarBabysitters from "../../components/NavbarBabysitters/NavbarBabysitters";
import NavbarParents from "../../components/NavbarParents/NavbarParents";
import { Link } from "react-router-dom";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import FindBaby from "../../components/home/findbaby/FindBaby";
import Discover from "../../components/home/discover/Discover";
import FooterMiddle from "../../components/home/footermiddle/FooterMiddle";
import FooterDown from "../../components/home/footerdown/FooterDown";
import FindJobCard from "../../components/FindJobCard";
import { v4 as uuidv4 } from "uuid";
import { fetcBabysitterJobs } from "../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./../../components/Navbar/Navbar";
function index() {
  let isBabySitters = JSON.parse(localStorage.getItem("isBabysitter"));
  let isParent = JSON.parse(localStorage.getItem("isParent"));
  const babysitterswanted = useSelector(
    (state) => state.babysitters.babysitterswanted
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetcBabysitterJobs());
  }, []);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = babysitterswanted.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    console.log("Current Page:", value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(babysitterswanted);
  return (
    <div>
      {isBabySitters ? <NavbarBabysitters /> : <Navbar />}
      <div className="topics">
        <div className="topic">
          <p>Type of babysitter needed</p>
        </div>
        <div className="topic">
          <p>Children</p>
        </div>
        <div className="topic">
          <p>Verification</p>
        </div>
        <div className="topic">
          <p>More Filters</p>
        </div>
      </div>
      <div className="find-babysitter">
        <div className="left">
          <div className="left-head">
            <h1>Find babysitting jobs</h1>
            <p>1,122 families matching your search</p>
          </div>
          <div className="direction">
            <div className="signUpForFree">Sign up for free</div>
            <div className="howItWorks">
              <Link
                style={{
                  color: "#389BA7",
                  fontWeight: "500",
                }}
              >
                How it works
              </Link>
            </div>
          </div>
          <div className="babysitterCards">
            {currentItems &&
              currentItems.map((elem) => {
                return <FindJobCard key={uuidv4()} elem={elem} />;
              })}
          </div>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(babysitterswanted.length / itemsPerPage)}
              page={currentPage}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
          </Stack>
          <div className="babysitLink">
            <Link style={{ color: "black" }} to="/">
              Babysits
            </Link>
            <p>/</p>
            <Link style={{ color: "black" }} to="/BabySitters">
              Babysitter
            </Link>
          </div>
          <div className="Information">
            <div className="info-header">
              <h1>Are you looking for a reliable babysitter?</h1>
              <p>
                Babysits has a large overview of babysitters, with 11,331
                babysitters currently available matching your search criteria.
                Start contacting babysitters now to find a reliable and
                experienced babysitter that your children deserve!
              </p>
            </div>
            <div className="babysitter-sort1">
              Find babysitter, Find nanny, Morning babysitter, Afternoon
              babysitter, Evening babysitter, Night babysitter, On call
              babysitter, After school babysitter, Weekday babysitter, Weekend
              babysitter
            </div>
            <div className="text">Babysitters in large cities</div>
            <div className="babysitter-sort2">
              <div className="region">New York</div>,
              <div className="region">New York</div>,
              <div className="region">New York</div>,
              <div className="region">New York</div>,
              <div className="region">New York</div>,
              <div className="region">New York</div>,
              <div className="region">New York</div>,
              <div className="region">New York</div>,
              <div className="region">New York</div>,
              <div className="region">New York</div>,
              <div className="region">New York</div>,
              <div className="region">New York</div>,
            </div>
          </div>
        </div>
        <div className="right">
          <iframe
            style={{ width: "100%", height: "600px", border: "none" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.547629386189!2d49.80889017596246!3d40.37455387144636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea2b26aff9%3A0x8bf044493464664c!2zQmFrxLEgRMO2dmzJmXQgVW5pdmVyc2l0ZXRp!5e0!3m2!1saz!2saz!4v1701542650036!5m2!1saz!2saz"
          ></iframe>
        </div>
      </div>
      <FindBaby />
      <Discover />
      <FooterMiddle />
      <FooterDown />
    </div>
  );
}

export default index;
