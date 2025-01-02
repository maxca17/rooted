// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Add more imports for additional pages/components
import Sponsor from './pages/Sponsor';
import Waitlist from './pages/Waitlist';
import CompanyBrandInfo from './pages/CompanyBrandInfo';
import IndividualForm from './pages/IndividualForm';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes as needed */}
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/companybrandinfo" element={<CompanyBrandInfo />} />
      <Route path="/indform" element={<IndividualForm />} />
    </Routes>

  );
}

export default AppRoutes;
