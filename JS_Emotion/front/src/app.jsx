import loadable from '@loadable/component';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const MainPage = loadable(() => import('@router/MainPage'));
const MyBooks = loadable(() => import('@router/MyBooks'));
const Categories = loadable(() => import('@router/Categories'));
const HotBooks = loadable(() => import('@router/HotBooks'));
const Search = loadable(() => import('@router/Search'));

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mybooks" element={<MyBooks />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/hotbooks" element={<HotBooks />} />
      <Route path="/search/:search/:display/:start/*" element={<Search />} />
    </Routes>
  </Router>
);

export default App;
