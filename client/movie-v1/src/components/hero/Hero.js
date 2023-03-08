import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Paper } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  const reviews = (movieId) => {
    navigate(`/Reviews/${movieId}`);
  }


  return (
    <div className='movie-carousel-container'>
      <Carousel>
        {
          movies?.map((movie) => {
            return (
              <Paper key={movie}>
                <div className='movie-card-container'>
                  <div className='movie-card' style={{ "--img": `url(${movie.backdrops[0]})` }}>
                    <div className='movie-detail'>
                      <div className='movie-poster'>
                        <img src={movie.poster} alt="" />
                      </div>
                      <div className='movie-title'>
                        <h2>{movie.title}</h2>
                      </div>
                      <div className='movie-buttons-container'>
                        <div className='play-button-icon-container'>
                          <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                            <PlayCircleIcon className='play-button-icon' />
                          </Link>
                        </div>
                        <div className='movie-review-button-container'>
                          <Button variant="outlined" color='primary' onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero