import React, {useEffect, useState} from "react";
import MovieLayoutHoc from "../layouts/Movie.layout";
import {useParams} from "react-router-dom";
import axios from "axios";

const MoviePage = () => {
  const {id} = useParams();
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
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
  });
  return (
    <div>
      <h1>Movie Page</h1>
    </div>
  );
};

export default MovieLayoutHoc(MoviePage);
