import React, {useContext, useState} from "react";
import {MovieContext} from "../../context/Movie.context";
import PaymentModelComponent from "../paymentModel/PaymentModel.component";

const MovieInfoComponent = () => {
  const {movie} = useContext(MovieContext);
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const genres = movie.genres?.map(({name}) => name).join(", ");
  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };
  const buyMovie = () => {
    setIsOpen(true);
    setPrice(999);
  };
  return (
    <>
      <PaymentModelComponent
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        price={price}
      />
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold text-white">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-2">
          <h4>4.4k ratings</h4>
          <h4>Kannada, Telugu, Tamil, Hindi, English</h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-xl px-4">
          <button
            onClick={rentMovie}
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
          >
            Rent $149
          </button>
          <button
            onClick={buyMovie}
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
          >
            Buy $999
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfoComponent;
