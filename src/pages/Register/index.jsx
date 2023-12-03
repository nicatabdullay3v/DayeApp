import React from "react";

import NavbarSecond from "../../components/NavbarSecond/NavbarSecond";
import RegisterStepOne from "./RegisterStepOne/RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo/RegisterStepTwo";
import ParentRegisterStepOne from "./ParentRegisterStepOne/ParentRegisterStepOne";
function index() {
  return (
    <div>
      <NavbarSecond />
      <RegisterStepOne />

      <RegisterStepTwo />
      <ParentRegisterStepOne />
    </div>
  );
}

export default index;
