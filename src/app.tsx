import loadable from '@loadable/component';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@redux/store';
import FbaseAuth from '@redux/fbaseDispatch';

const MainPage = loadable(() => import('@components/pages/Main'));
const Search = loadable(() => import('@components/pages/Search'));
const DetailPage = loadable(() => import('@components/pages/BookDetail'));

const App = () => (
  <Provider store={store}>
    <FbaseAuth />
    <Router basename={process.env.NODE_ENV === 'production' ? 'Book_Helper' : ''}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search/:search/:display/*" element={<Search />} />
        <Route path="/comment/:isbn" element={<DetailPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
