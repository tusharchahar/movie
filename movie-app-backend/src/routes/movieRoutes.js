"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieController_1 = require("../controllers/movieController");
const router = express_1.default.Router();
router.get('/', movieController_1.getMovies);
router.post('/', movieController_1.createMovie);
router.get('/unique/:id', movieController_1.getMovie);
router.get('/reviews/:id', movieController_1.getReviews);
router.get('/reviews/search', movieController_1.searchReviews);
exports.default = router;
