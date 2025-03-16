import React from "react";
import NavbarComponent from "../components/navbar/Navbar.component";

const DefaultLayoutHoc =
  (Component) =>
  ({...props}) => {
    return (
      <div>
        <NavbarComponent />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default DefaultLayoutHoc;
