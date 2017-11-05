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
            <Route exact path="/about" component={Home} />
            <Route exact path="/pages" component={Home} />
            <Route exact path="/music" component={Home} />
            <Route exact path="/picture" component={Home} />
            <Route exact path="/blog" component={Home} />
            <Route exact path="/portfolio" component={Home} />
            <Route exact path="/faq" component={Home} />
            <Route exact path="/contact" component={Home} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default Routes;
