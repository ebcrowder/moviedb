import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

import Header from './Header';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
      <div className="credit">
        <p>
          Logo created by
          <a href="http://www.florentbertaux.com/">Florent Bertaux</a>
        </p>
      </div>
    </div>
  </Router>
);

export default App;
