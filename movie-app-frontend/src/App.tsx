import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import CreateMovie from './pages/CreateMovie';
import CreateReview from './pages/CreateReview';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/movies/:id" element={<MovieDetails></MovieDetails>} />
        <Route path="/create-movie" element={<CreateMovie></CreateMovie>} />
        <Route path="/create-review" element={<CreateReview></CreateReview>} />
      </Routes>
    </Router>
  );
};

export default App;
