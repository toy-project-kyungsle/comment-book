import loadable from '@loadable/component';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const MainPage = loadable(() => import('@router/MainPage'));
const Search = loadable(() => import('@router/Search'));
const Auth = loadable(() => import('@router/Auth'));
const DetailPage = loadable(() => import('@router/DetailPage'));

const App = () => (
  <RecoilRoot>
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/search/:search/:display/:start/*" element={<Search />} />
        <Route path="/comment/:isbn" element={<DetailPage />} />
      </Routes>
    </Router>
  </RecoilRoot>
);

export default App;
