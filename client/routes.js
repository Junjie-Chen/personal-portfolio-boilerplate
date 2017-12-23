import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Main, Portfolio, Project, About, Contact, Music } from './components';
import { me } from './store';

class Routes extends Component {
  componentDidMount() {
    this.props.login();
  }

  render() {
    return (
      <Router>
        <Main>
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/pages" component={Portfolio} />
            <Route path="/music" component={Music} />
            <Route path="/picture" component={Portfolio} />
            <Route path="/blog" component={Portfolio} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/project/:id" component={Project} />
            <Route path="/faq" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(me());
  }
})

Routes.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Routes);
