import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Experiences from './components/Experiences';
import PlanTrip from './components/PlanTrip';
import Destination from './components/Destination';
import Home from './components/Home';
import Footer from './components/Footer';
import Region from './pages/Region';
import Login from './components/Login';
import Register from './components/Register';
import HotelBooking from './pages/HotelBooking';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/plan-trip" element={<PlanTrip />} />
        <Route path="/region" element={<Region />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotel" element={<HotelBooking/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;