import loadable from '@loadable/component';
import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const MainPage = loadable(() => import('../MainPage'));

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </Router>
);

export default App;
