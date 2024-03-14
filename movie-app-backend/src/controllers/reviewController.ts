import { Request, Response } from 'express';
import { getReviews } from './movieController';
import Movie from '../models/Movie';
import Review from '../models/Review';

export const createReview = async (req: Request, res: Response): Promise<void> => {
  const review = new Review(req.body);
  try {
    let MovieDetail = await Movie.find({name: req.body.movieName});
    await Movie.findOne({name: req.body.movieName})
		.then((movie: any | null) => {
			if (!movie) {
				return movie;
			}

      const newRating  = Math.floor((Number(movie.averageRating*movie.noOfRating)+Number(req.body.rating))/(movie.noOfRating+1));
			Object.assign(movie, {noOfRating:movie.noOfRating+1,averageRating:newRating});
			return movie.save();
		})
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};
