import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { toggleDropdown } from '../store';

const dropdownMenu = () => {
  return (
    <ul className="dropdown">
      <li>
        <NavLink to="/music">Music</NavLink>
      </li>
      <li>
        <NavLink to="/picture">Picture</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </ul>
  );
}

const Sidebar = props => {
  const { sidebar, dropdown, handleClick } = props;

  const menu = dropdown ? dropdownMenu() : '';

  return (
    <nav id="sidebar" className={sidebar ? 'active' : ''}>
      <div className="sidebar-header">
        <img src="images/react.png" />
        <h2>Your Name</h2>
        <h2 className="name">YN</h2>
      </div>
      <ul className="sidebar-body">
        <li>
          <NavLink to="/">
            <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages" onClick={handleClick}>
            <span className="glyphicon glyphicon-duplicate" aria-hidden="true"></span>
            Pages
            <span className={dropdown ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down"} aria-hidden="true"></span>
          </NavLink>
          <CSSTransitionGroup
            transitionName="dropdown"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {menu}
          </CSSTransitionGroup>
        </li>
        <li>
          <NavLink to="/portfolio">
            <span className="glyphicon glyphicon-link" aria-hidden="true"></span>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq">
            <span className="glyphicon glyphicon-paperclip" aria-hidden="true"></span>
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <span className="glyphicon glyphicon-send" aria-hidden="true"></span>
            Contact
          </NavLink>
        </li>
      </ul>

      <a className="btn btn-social-icon btn-lg btn-linkedin" href="#">
      <span className="fa fa-linkedin"></span>
      </a>
      <a className="btn btn-social-icon btn-lg btn-github" href="#">
        <span className="fa fa-github"></span>
      </a>
      <a className="btn btn-social-icon btn-lg btn-instagram" href="#">
        <span className="fa fa-instagram"></span>
      </a>
      <a className="btn btn-social-icon btn-lg btn-soundcloud" href="#">
        <span className="fa fa-soundcloud"></span>
      </a>

      <ul className="sidebar-footer">
        <li>
          <a href="#">Add to Bookmark</a>
        </li>
        <li>
          <a href="#">Go to Medium Article</a>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = state => ({
  sidebar: state.sidebar,
  dropdown: state.dropdown
})

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(toggleDropdown());
  }
})

Sidebar.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  dropdown: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
