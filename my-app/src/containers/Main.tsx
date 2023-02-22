import React from 'react';

import '../assets/global.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home';

const MainPage = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default MainPage;
