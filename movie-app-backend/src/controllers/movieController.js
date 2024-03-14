"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchReviews = exports.getReviews = exports.getMovie = exports.deleteMovie = exports.createMovie = exports.getMovies = void 0;
const Movie_1 = __importDefault(require("../models/Movie"));
const Review_1 = __importDefault(require("../models/Review"));
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield Movie_1.default.find({ name: { $regex: req.query.search } });
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getMovies = getMovies;
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = new Movie_1.default(req.body);
    try {
        console.log(2);
        const newMovie = yield movie.save();
        res.status(201).json(newMovie);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createMovie = createMovie;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedMovie = yield Movie_1.default.findByIdAndDelete(req.params.id);
        if (deletedMovie) {
            yield Review_1.default.deleteMany({ movie: deletedMovie.name });
            res.status(200).json({ message: 'Movie deleted successfully' });
        }
        else {
            res.status(404).json({ message: 'Movie not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteMovie = deleteMovie;
const getMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(8);
    try {
        const Moviedetail = yield Movie_1.default.findById(req.params.id);
        if (Moviedetail) {
            res.status(200).json(Moviedetail);
        }
        else {
            res.status(404).json({ message: 'Movie not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getMovie = getMovie;
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(8);
    try {
        //const whereClause = req.params && req.params.id ? { where: { movieId: req.params.id }, } : undefined;
        let MovieDet = yield Movie_1.default.find({ _id: req.params.id });
        let Reviews = yield Review_1.default.find({ movieName: MovieDet[0].name });
        console.log(Reviews, MovieDet[0].name);
        //console.log(Reviews,whereClause,req.params,req.query);
        // let response = [{
        //     hobby:hobb[0].hobby,
        //     college:colleg[0].college
        // }];
        //console.log(response);
        //return res.json(hobb);
        // const Reviews = await Review.findById(req.params.id);
        if (Reviews) {
            res.status(200).json(Reviews);
        }
        else {
            res.status(404).json({ message: 'No reviews' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getReviews = getReviews;
const searchReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchParam = req.query.search;
        const reviews = yield Review_1.default.find({ comments: { $regex: searchParam, $options: 'i' } });
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.searchReviews = searchReviews;
