import React from 'react';

const ReviewCard: React.FC = ({reviewer, rating, comments}) => {
  return (
    <div className='bg-violet-200 w-full h-auto p-6'>
        <p className="text-2xl my-2">{reviewer}</p>
            <p className='text-l my-2'>Released: {rating}</p>
            <p className='text-xl font-bold my-3'>{comments}</p>
      </div>
  );
};

export default ReviewCard;