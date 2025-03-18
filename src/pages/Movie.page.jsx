import React, {useContext, useEffect, useState} from "react";
import MovieLayoutHoc from "../layouts/Movie.layout";
import {useParams} from "react-router-dom";
import axios from "axios";
import {MovieContext} from "../context/Movie.context";
import MovieHeroComponent from "../components/movieHero/MovieHero.component";
import {FaCcApplePay, FaCcVisa} from "react-icons/fa";
import PosterSliderComponent from "../components/posterSlider/PosterSlider.component";
import CastComponent from "../components/cast/Cast.component";

const MoviePage = () => {
  const {id} = useParams();
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const {movie, setMovie} = useContext(MovieContext);
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);
  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.result);
    };
    requestSimilarMovies();
  }, [id]);
  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);
  useEffect(() => {
    const requestMovie = async () => {
      const getMovie = await axios.get(`/movie/${id}`);
      setMovie(getMovie.data);
    };
    requestMovie();
  }, [id]);
  const settingsCast = {
    infinite: false,
    speed: 500,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settingsCast: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settingsCast: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settingsCast: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    infinite: false,
    speed: 500,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <MovieHeroComponent />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About The Movie
          </h1>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all Rupay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p>
                  Get 75% off up to INR 200 on all Rupay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSliderComponent
            config={settings}
            title="Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          <PosterSliderComponent {...settingsCast}>
            {cast.map((castData) => {
              return (
                <CastComponent
                  image={castData.profile_path}
                  castName={movie.original_name}
                  role={movie.character}
                />
              );
            })}
          </PosterSliderComponent>
        </div>
        <PosterSliderComponent
          config={settings}
          title="BMS Xclusive Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
