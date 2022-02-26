import loadable from '@loadable/component';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const MainPage = loadable(() => import('@router/MainPage'));
const Search = loadable(() => import('@router/Search'));
const DetailPage = loadable(() => import('@router/DetailPage'));

let mode;

if (process.env.NODE_ENV === 'production') {
  mode = 'Book_Helper';
} else {
  mode = '';
}

const App = () => (
  <RecoilRoot>
    <Router basename={mode}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search/:search/:display/*" element={<Search />} />
        <Route path="/comment/:isbn" element={<DetailPage />} />
      </Routes>
    </Router>
  </RecoilRoot>
);

export default App;
