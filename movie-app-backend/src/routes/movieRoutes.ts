import express from 'express';
import { getMovies, createMovie, getMovie, searchReviews, getReviews } from '../controllers/movieController';

const router = express.Router();

router.get('/', getMovies);
router.post('/', createMovie);
router.get('/unique/:id', getMovie);
router.get('/reviews/:id', getReviews);
router.get('/reviews/search', searchReviews);

export default router;
