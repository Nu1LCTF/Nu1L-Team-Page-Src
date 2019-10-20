import React from 'react';
import {
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <ul>
          <li><NavLink to="/" activeClassName="active"> Home </NavLink></li>
          <li><NavLink to="/members" activeClassName="active"> Members </NavLink></li>
          <li><NavLink to="/awards" activeClassName="active"> Awards </NavLink></li>
          <li><NavLink to="/contact" activeClassName="active"> Contact Us </NavLink></li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route path="/">
            <h1>Home</h1>
          </Route>

          <Route path="/members">
            <h1>Members</h1>
          </Route>

          <Route path="/awards">
            <h1>Awards</h1>
          </Route>

          <Route path="/contact">
            <h1>Contact Us</h1>
          </Route>

          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
