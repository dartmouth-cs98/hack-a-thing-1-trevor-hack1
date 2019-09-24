import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

import Encrypt from './encrypt';

const App = () => {
  const FallBack = () => {
    return (
      <div>
        URL Not Found
      </div>
    );
  };

  return (
    <Router>
      <div className="main-page">
        <Switch>
          <Route path="/" component={Encrypt} />
          <Route path="/encrypt" component={Encrypt} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
