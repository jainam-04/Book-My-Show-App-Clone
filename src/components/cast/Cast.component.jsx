import React from "react";

const CastComponent = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          {props.image && (
            <img
              src={`https://image.tmdb.org/t/p/original${props.image}`}
              alt="Cast and Crew"
              className="w-full h-full rounded-full object-cover object-center"
            />
          )}
          {!props.image && (
            <img
              src={`https://imebehavioralhealth.com/wp-content/uploads/2021/10/user-icon-placeholder-1.png`}
              alt="Cast and Crew"
              className="w-full h-full rounded-full object-cover object-center"
            />
          )}
        </div>
        <h1 className="text-xl text-gray-800">{props.castName}</h1>
        <h4 className="text-sm text-gray-500">{props.role}</h4>
      </div>
    </div>
  );
};

export default CastComponent;
