import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleSidebar } from '../store';

const Navbar = props => {
  const { handleClick } = props;

  return (
    <nav id="navbar">
      <div className="navbar-header">
        <button onClick={handleClick}>Toggle Me</button>
      </div>
      <ul className="navbar-body">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/pages">Pages</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
      </ul>
    </nav>
  );
}

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(toggleSidebar());
  }
});

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Navbar);
