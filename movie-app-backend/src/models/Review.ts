import mongoose, { Document } from 'mongoose';

export interface ReviewType extends Document {
  movieName: string;
  reviewerName?: string;
  rating: number;
  comments: string;
}

const reviewSchema = new mongoose.Schema({
  movieName: { type: String, required: true },
  reviewerName: { type: String, default: null },
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
});

export default mongoose.model<ReviewType>('Review', reviewSchema);
