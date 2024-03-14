import React from 'react';

const Cards: React.FC = ({name, releaseDate, averageRating, click }) => {
  return (
    <div className='bg-violet-200 w-[25rem] h-auto p-6 flex flex-col cursor-pointer' onClick={click}>
        <p className="text-2xl my-2">{name}</p>
            <p className='text-l my-2'>Released: {new Date(releaseDate).toLocaleDateString()}</p>
            <p className='text-xl font-bold my-3'>Rating: {averageRating || 'N/A'}/10</p>
      </div>
  );
};

export default Cards;