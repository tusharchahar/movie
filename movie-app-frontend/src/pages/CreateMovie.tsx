import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateMovie: React.FC = () => {
  const navigate = useNavigate();
  function sendData(event:any){
    event.preventDefault();
    const data = new FormData(event.target)
    handle(Object.fromEntries(data.entries()));
  }
  const handle = async (data:any) => {
    try {
      await axios.post<any>(`http://localhost:5500/api/movies`,data);
      navigate(`/`);
    } catch (error) {
      console.error('Error creating movies:', error);
    }
  };
  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className='mx-10 my-5'>
      <h2 className="text-2xl font-bold p-4">Add New Movie</h2>
      <form className="p-4 w-1/3" onSubmit={sendData}>
        <div className="mb-4">
          <input type="text" placeholder='Name' name='name' id="name" className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <input  placeholder='Release Date' name='releaseDate' type="date" id="releaseDate" className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>
        <button type='submit' className="bg-blue-500 my-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default CreateMovie;
