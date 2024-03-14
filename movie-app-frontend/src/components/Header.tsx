import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-200 py-4 px-7 flex justify-between items-center w-full ">
      <Link to="/" className="text-black text-xl hover:text-black">MOVIECRITIC</Link>
      <div className="space-x-4 ">
        <Link to="/create-movie" className=" rounded text-blue-700 py-2 px-2 border hover:text-blue-700 border-blue-700 bg-white">Add new movie</Link>
        <Link to="/create-review" className="rounded text-white py-2 px-2 hover:text-white bg-blue-700">Add new review</Link>
      </div>
    </header>
  );
};

export default Header;
