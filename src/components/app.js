import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, NavLink,
} from 'react-router-dom';
import SignIn from './signin';
import Encrypt from './encrypt';

const App = () => {
  const Welcome = () => {
    return (
      <div>
        Welcome
      </div>

    );
  };

  const FallBack = () => {
    return (
      <div>
        URL Not Found
      </div>
    );
  };

  const Nav = () => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/encrypt" exact>Encrypt</NavLink></li>
          <li><NavLink to="/signin">Sign In</NavLink></li>
        </ul>
      </nav>
    );
  };
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/encrypt" component={Encrypt} />
          <Route exact path="/signin" component={SignIn} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
