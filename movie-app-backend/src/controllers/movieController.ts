import { Request, Response } from 'express';
import Movie from '../models/Movie';
import Review from '../models/Review';

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const movies = await Movie.find({ name: {$regex:req.query.search} });
    res.status(200).json(movies);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const createMovie = async (req: Request, res: Response): Promise<void> => {
  const movie = new Movie(req.body);
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (deletedMovie) {
      await Review.deleteMany({ movie: deletedMovie.name });
      res.status(200).json({ message: 'Movie deleted successfully' });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const Moviedetail = await Movie.findById(req.params.id);
    if (Moviedetail) {
      res.status(200).json(Moviedetail);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    let MovieDet = await Movie.find({_id: req.params.id});
    let Reviews = await Review.find({movieName: MovieDet[0].name})

    if (Reviews) {
      res.status(200).json(Reviews);
    } else {
      res.status(404).json({ message: 'No reviews' });
    }
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const searchReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const searchParam = req.query.search as string;
    const reviews = await Review.find({ comments: { $regex: searchParam, $options: 'i' } });
    res.status(200).json(reviews);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
