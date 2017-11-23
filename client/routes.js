import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Main, Portfolio, Project, About } from './components';

class Routes extends Component {
  render() {
    return (
      <Router hashType="noslash">
        <Main>
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/pages" component={Portfolio} />
            <Route path="/music" component={Portfolio} />
            <Route path="/picture" component={Portfolio} />
            <Route path="/blog" component={Portfolio} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/project/:id" component={Project} />
            <Route path="/faq" component={Portfolio} />
            <Route path="/contact" component={Portfolio} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default Routes;
