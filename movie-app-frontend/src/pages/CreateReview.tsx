import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { Movie } from '../types';
import { useNavigate } from 'react-router-dom';

const CreateReview: React.FC = () => {
  const [movies,setMovies] = React.useState<Movie[]>([]);
  const navigate = useNavigate();
  function sendData(event:any){
    event.preventDefault();
    const data = new FormData(event.target)
    handle(Object.fromEntries(data.entries()));
  }
  const handle = async (data:any) => {
    try {
      await axios.post<any>(`http://localhost:5500/api/reviews`,data);
      navigate(`/`);
    } catch (error) {
      console.error('Error creating reviews:', error);
    }
  };
  const handleMovies = async (searchTerm: string) => {
    try {
      const response = await axios.get<any>(`http://localhost:5500/api/movies?search=${searchTerm}`);
      setMovies(response.data);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  React.useEffect(()=>{
    handleMovies('');
  },[]);

  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className='mx-10 my-5'>
      <h2 className="text-2xl font-bold p-4">Add New Review</h2>
      <form className="p-4 w-1/3" onSubmit={sendData}>
        <div className="mb-4">
          <select id="movie" name='movieName' className="border border-gray-300 rounded px-4 py-2 w-full">
            <option value="">Select a movie...</option>
            {
            movies.map(movie => {
              return (
                <option key={movie._id}
                value={movie.name}>{movie.name}</option>)
            })
          }
          </select>
        </div>
        <div className="mb-4">
          <input type="text" name='reviewerName' placeholder='Your name' id="name" className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <input type="number" name='rating' placeholder='Rating out of 10' id="rating" min="0" max="10" className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <textarea id="comment" name='comments' placeholder='Review comments' className="border border-gray-300 rounded px-4 py-2 w-full" rows={4}></textarea>
        </div>
        <button type='submit' className="bg-blue-500 my-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default CreateReview;
