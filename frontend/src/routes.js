// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Add more imports for additional pages/components

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default AppRoutes;
