import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import MoviesList from './Components/MoviesList';
import MovieDetail from './Components/MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
