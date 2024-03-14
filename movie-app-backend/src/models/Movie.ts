import mongoose, { Document } from 'mongoose';

export interface MovieType extends Document {
  name: string;
  releaseDate: Date;
  averageRating?: number;
  noOfRating?: number;
}

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, unique:true },
  releaseDate: { type: Date, required: true },
  averageRating: { type: Number, default: null },
  noOfRating:{type:Number, default:0}
});

export default mongoose.model<MovieType>('Movie', movieSchema);
