import './App.css';
import './css/style.css';
import './css/responsive.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Page404 from './components/Page404';

function App() {


  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
