import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Projects from './Projects';
import Navbar from './Navbar';
import { getPosition } from '../store';

const Portfolio = props => {
  const handleClick = event => {
    const width = event.currentTarget.offsetWidth;
    const height = event.currentTarget.offsetHeight;
    const left = event.currentTarget.offsetLeft;
    const top = event.currentTarget.offsetTop - window.scrollY;

    props.getPosition(width, height, left, top);
  }

  return (
    <div id="inner-container">
      <Navbar />
      <Projects handleClick={handleClick} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getPosition(width, height, left, top) {
    dispatch(getPosition(width, height, left, top));
  }
})

Portfolio.propTypes = {
  getPosition: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Portfolio);
