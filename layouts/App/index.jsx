import loadable from '@loadable/component';
import React from 'react';
import { Redirect, Route, Router, Routes } from 'react-router-dom';

const MainPage = loadable(() => import('@layouts/MainPage'));
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/MainPage" component={MainPage} />
    </Routes>
  </Router>
);

export default App;
