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
exports.createReview = void 0;
const Movie_1 = __importDefault(require("../models/Movie"));
const Review_1 = __importDefault(require("../models/Review"));
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const review = new Review_1.default(req.body);
    try {
        let MovieDetail = yield Movie_1.default.find({ name: req.body.movieName });
        yield Movie_1.default.findOne({ name: req.body.movieName })
            .then((movie) => {
            if (!movie) {
                return movie;
            }
            const newRating = Math.floor((Number(movie.averageRating * movie.noOfRating) + Number(req.body.rating)) / (movie.noOfRating + 1));
            console.log((Number(movie.averageRating * movie.noOfRating) + Number(req.body.rating)));
            Object.assign(movie, { noOfRating: movie.noOfRating + 1, averageRating: newRating });
            console.log(movie);
            console.log('scon');
            return movie.save();
        });
        const newReview = yield review.save();
        res.status(201).json(newReview);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createReview = createReview;
