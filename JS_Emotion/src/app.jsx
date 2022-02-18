import loadable from '@loadable/component';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const MainPage = loadable(() => import('@router/MainPage'));
const Search = loadable(() => import('@router/Search'));
const DetailPage = loadable(() => import('@router/DetailPage'));

const App = () => (
  <RecoilRoot>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search/:search/:display/*" element={<Search />} />
        <Route path="/comment/:isbn" element={<DetailPage />} />
      </Routes>
    </Router>
  </RecoilRoot>
);

export default App;
