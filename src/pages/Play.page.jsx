import React from "react";
import DefaultLayoutHoc from "../layouts/Default.layout";

const PlayPage = () => {
  return (
    <div>
      <h1>Play Page</h1>
    </div>
  );
};

export default DefaultLayoutHoc(PlayPage);
