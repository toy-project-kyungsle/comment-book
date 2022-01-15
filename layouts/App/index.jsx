import loadable from '@loadable/component';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const MainPage = loadable(() => import('@layouts/MainPage'));
const MyBooks = loadable(() => import('@pages/MyBooks'));
const Categories = loadable(() => import('@pages/Categories'));

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mybooks" element={<MyBooks />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
