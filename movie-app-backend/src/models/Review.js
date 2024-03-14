"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    movieName: { type: String, required: true },
    reviewerName: { type: String, default: null },
    rating: { type: Number, required: true },
    comments: { type: String, required: true },
});
exports.default = mongoose_1.default.model('Review', reviewSchema);
