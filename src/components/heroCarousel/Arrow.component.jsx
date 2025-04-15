import React from "react";

export function NextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <>
      <div
        className={className}
        style={{color: "red", padding: "10px"}}
        onClick={onClick}
      ></div>
    </>
  );
}

export function PrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <>
      <div className={className} style={{...style}} onClick={onClick}></div>
    </>
  );
}
