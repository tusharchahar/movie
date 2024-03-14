import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Movie, Review } from '../types';
import Header from '../components/Header';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetchMovie();
    fetchReviews();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await axios.get<Movie>(`http://localhost:5500/api/movies/unique/${id}`);
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get<Review[]>(`http://localhost:5500/api/movies/reviews/${id}`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className= "py-4 px-7 flex justify-between items-center w-auto m-10">
      <p className="text-black text-3xl text-bold hover:text-black">{movie.name}</p>
      <div className="space-x-4 ">
        <p  className=" text-3xl py-2 px-2 text-blue-700">{movie.averageRating || 'N/A'}/10</p>
      </div>
    </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">Reviews</h2>
        <ul>
          {reviews.map(review => (
            <li key={review._id} className="border-b border-gray-300 p-4">
              <p>Reviewer: {review.reviewerName || 'Anonymous'}</p>
              <p>Rating: {review.rating}</p>
              <p>Comments: {review.comments}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
