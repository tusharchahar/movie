import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 right-0 z-15 bg-gray-300 py-3 px-6 flex justify-between items-center w-full ">
      <p className="text-white text-xl">Copyright 2021</p>
      <div className="space-x-4 ">
        <p className=" text-white py-2 px-2">Follow us at instagram</p>
      </div>
    </footer>
  );
};

export default Footer;