import loadable from '@loadable/component';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const MainPage = loadable(() => import('@layouts/MainPage'));
const MyBooks = loadable(() => import('@pages/MyBooks'));
const Categories = loadable(() => import('@pages/Categories'));
const HotBooks = loadable(() => import('@pages/HotBooks'));
const Search = loadable(() => import('@pages/Search'));

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mybooks" element={<MyBooks />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/hotbooks" element={<HotBooks />} />
      <Route path="/search/*" element={<Search />} />
    </Routes>
  </Router>
);

export default App;
