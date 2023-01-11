import React from 'react';
import { Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Rentals from './pages/Rentals';
import './App.css';
import BookRestaurant from './pages/BookRestaurant';
import BookCar from './pages/BookCar';
import BookFlight from './pages/BookFlight';
import TripExperience from './pages/TripExperience';
import Team from './pages/Team';
import HowToEarn from './pages/HowToEarn';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Login from './pages/Login';

const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/restaurant" element={<BookRestaurant />} />
      <Route path="/car" element={<BookCar />} />
      <Route path="/flight" element={<BookFlight />} />
      <Route path="/trip-experience" element={<TripExperience />} />
      <Route path="/about" element={<Team />} />
      <Route path="/how-to-earn" element={<HowToEarn />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/support" element={<Support />} />
      <Route path="/login" element={<Login />} />
    </Routes></>
  )
};

export default App;
