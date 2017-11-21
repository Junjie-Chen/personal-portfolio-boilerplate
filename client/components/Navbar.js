import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { toggleSidebar, toggleNavbar } from '../store';

const Navbar = props => {
  const { navbar, handleClickSidebar, handleClickNavbar } = props;

  return (
    <nav id="navbar">
      <div className={navbar ? 'navbar-header navbar-active' : 'navbar-header'}>
        <button onClick={handleClickSidebar}>Toggle Me</button>
        <i className="material-icons md-24 md-light" onClick={handleClickNavbar}>menu</i>
        <NavLink to="/">Title</NavLink>
      </div>
      <ul className={navbar ? 'navbar-body navbar-active' : 'navbar-body'}>
        <li><NavLink to="/">Page</NavLink></li>
        <li><NavLink to="/">Page</NavLink></li>
        <li><NavLink to="/">Page</NavLink></li>
        <li><NavLink to="/">Page</NavLink></li>
      </ul>
    </nav>
  );
}

const mapStateToProps = state => ({
  navbar: state.navbar
})

const mapDispatchToProps = dispatch => ({
  handleClickSidebar() {
    dispatch(toggleSidebar());
  },
  handleClickNavbar() {
    dispatch(toggleNavbar());
  }
});

Navbar.propTypes = {
  handleClickSidebar: PropTypes.func.isRequired,
  handleClickNavbar: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
