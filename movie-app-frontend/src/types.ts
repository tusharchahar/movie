export interface Movie {
    _id: number;
    name: string;
    releaseDate: string; // Assuming ISO string format
    averageRating?: number | null;
  }
  
  export interface Review {
    _id: number;
    movie: string;
    reviewerName?: string;
    rating: number;
    comments: string;
  }
  