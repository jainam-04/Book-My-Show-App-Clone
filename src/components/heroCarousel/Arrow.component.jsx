import React from "react";

export function NextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <>
      <div
        className={className}
        style={{...style, display: "block", backgroundColor: "red"}}
        onClick={onClick}
      ></div>
    </>
  );
}

export function PrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <>
      <div
        className={className}
        style={{...style, display: "block", backgroundColor: "red"}}
        onClick={onClick}
      ></div>
    </>
  );
}
