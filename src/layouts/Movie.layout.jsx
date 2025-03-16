import React from "react";
import MovieNavbarComponent from "../components/navbar/MovieNavbar.component";

const MovieLayoutHoc =
  (Component) =>
  ({...props}) => {
    return (
      <div>
        <MovieNavbarComponent />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default MovieLayoutHoc;
