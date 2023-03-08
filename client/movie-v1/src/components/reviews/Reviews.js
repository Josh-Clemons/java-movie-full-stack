import React, {useState} from 'react';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../reviewForm/ReviewForm';

import { Box } from '@mui/material';


const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {

  const revText = useRef();
  const params = useParams();
  const movieId = params.movieId;
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    getMovieData(movieId);
  }, [])

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try {

      const response = await axios.post("http://localhost:8080/api/v1/reviews", { body: inputText, imdbId: movieId });
      const updatedReviews = [...reviews, { body: inputText}]

      setInputText('');

      setReviews(updatedReviews);

    } catch (error) {
      console.log('error posting review', error);
    }

  }

  return (
    <Box display='flex' flexDirection='row' justifyContent='space-evenly' className="mt-2" sx={{backgroundColor: 'black', color: 'white'}}>
      <Box>
        <img src={movie?.poster} alt="" />
      </Box>
      <Box display='flex' flexDirection='column' className="mt-2" sx={{width: '40%', m: 5}}>
        <ReviewForm handleSubmit={addReview} inputText={inputText} setInputText={setInputText} labelText="Write a Review?"/>
        {reviews?.map((review) => {
          return (
            <Box key={review.body}>
              {review.body}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Reviews