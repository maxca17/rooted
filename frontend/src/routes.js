// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Add more imports for additional pages/components
import Sponsor from './pages/Sponsor';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes as needed */}
      <Route path="/sponsor" element={<Sponsor />} />

    </Routes>

  );
}

export default AppRoutes;
