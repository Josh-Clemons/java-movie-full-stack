import "./App.css";
import axios from 'axios';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

// components
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/movies");
      setMovies(response.data);
    } catch (error) {
      console.log("error fetching movies: ", error);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/movies/${movieId}`);
      const movieDetails = response.data;
      setMovie(movieDetails);
      setReviews(movieDetails.reviewIds)

    } catch (error) {
      console.log('error getting movie data', error)
    }
  }
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} reviews={reviews} setReviews={setReviews} movie={movie} />}></Route>
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
