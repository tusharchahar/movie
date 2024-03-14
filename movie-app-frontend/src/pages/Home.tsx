import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import { Movie } from '../types';
import { useNavigate } from "react-router-dom";
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const navigate = useNavigate();

  function handleClick(id:number) {
    navigate(`/movies/${id}`);
  }

  const handleSearch = async (searchTerm: string) => {
    try {
      const response = await axios.get<Movie[]>(`http://localhost:5500/api/movies?search=${searchTerm}`);
      setMovies(response.data);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  React.useEffect(()=>{
    handleSearch('');
  },[]);

  return (
    <div className='w-screen h-screen'>
      <Header />
      <h2 className="text-3xl p-8">The best movies review site!</h2>
      <SearchBar onSearch={handleSearch} />
        <div className='flex m-10 gap-8 flex-wrap w-auto px-10'>
          {(()=>{
            if(movies.length===0){
              return <p>No movies Found</p>
            }
          })()}
          {
            movies.map(movie => {
              return (
                <Cards key={movie._id}
                name={movie.name}
                click={()=>{handleClick(movie._id)}}
                releaseDate={movie.releaseDate}

                averageRating={movie.averageRating}>
            
          </Cards>
              )
            })
          }
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Home;
