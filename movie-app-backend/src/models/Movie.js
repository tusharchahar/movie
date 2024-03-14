"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    releaseDate: { type: Date, required: true },
    averageRating: { type: Number, default: null },
    noOfRating: { type: Number, default: 0 }
});
exports.default = mongoose_1.default.model('Movie', movieSchema);
