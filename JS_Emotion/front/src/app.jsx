import loadable from '@loadable/component';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const MainPage = loadable(() => import('@router/MainPage'));
const Search = loadable(() => import('@router/Search'));
const Login = loadable(() => import('@router/Login'));
const SingUp = loadable(() => import('@router/SingUp'));
const DetailPage = loadable(() => import('@router/DetailPage'));

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SingUp />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/detailpage/:isbn" element={<DetailPage />} />
      <Route path="/search/:search/:display/:start/*" element={<Search />} />
    </Routes>
  </Router>
);

export default App;
