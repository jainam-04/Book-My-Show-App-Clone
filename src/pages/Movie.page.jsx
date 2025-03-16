import React from "react";
import MovieLayoutHoc from "../layouts/Movie.layout";

const MoviePage = () => {
  return (
    <div>
      <h1>Movie Page</h1>
    </div>
  );
};

export default MovieLayoutHoc(MoviePage);
