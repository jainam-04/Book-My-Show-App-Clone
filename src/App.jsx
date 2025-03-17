import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/Home.page";
import Moviepage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.TMDB_API_KEY;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie/:id" element={<Moviepage />} />
        <Route path="/plays" element={<PlayPage />} />
      </Routes>
    </>
  );
}

export default App;
