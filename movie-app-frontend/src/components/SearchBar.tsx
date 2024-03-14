import React, { useState } from 'react';
import search from '../assets/search.svg';

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='bg-white w-2/5 overflow-hidden rounded border mx-8 border-blue-700 flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.2rem] h-[1.2rem]' />
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              // sumit the form
              handleSearch();
            }
          }} type="text" placeholder='Search for your favourite movie' className='focus:outline-none w-full text-[#212121] text-lg' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
    // <div className="p-4">
    //    <input onKeyUp={(e) => {
    //         if (e.key === 'Enter') {
    //           // sumit the form
    //           handleSearch();
    //         }
    //       }} type="text" placeholder='Search reviews...' className='border border-gray-300 rounded px-4 py-2 w-64' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
    //   {/* <input
    //     type="text"
    //     placeholder="Search reviews..."
    //     className="border border-gray-300 rounded px-4 py-2 w-64"
    //     value={searchTerm}
    //     onChange={e => setSearchTerm(e.target.value)}
    //   />
    //   <button
    //     className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded"
    //     onClick={handleSearch}
    //   >
    //     Search
    //   </button> */}
    // </div>
  );
};

export default SearchBar;
