import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Main, Home } from './components';

class Routes extends Component {
  render() {
    return (
      <Router hashType="noslash">
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default Routes;
