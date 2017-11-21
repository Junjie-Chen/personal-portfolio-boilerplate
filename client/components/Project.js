import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Cover from './Cover';

const projects = [
  {
    id: 1,
    name: 'Flexbox',
    image: 'images/flexbox.png'
  },
  {
    id: 2,
    name: 'Transition',
    image: 'images/transition.png'
  },
  {
    id: 3,
    name: 'Parallax',
    image: 'images/parallax.png'
  },
  {
    id: 4,
    name: 'Center',
    image: 'images/center.png'
  },
  {
    id: 5,
    name: 'Grid',
    image: 'images/grid.png'
  },
  {
    id: 6,
    name: 'Animation',
    image: 'images/animation.png'
  },
  {
    id: 7,
    name: 'Sass',
    image: 'images/sass.png'
  },
  {
    id: 8,
    name: 'RGBA',
    image: 'images/rgba.png'
  }
];

const Project = props => {
  const { id } = props.match.params;
  const { position } = props;

  const project = projects.find(project => {
    return project.id === Number(id);
  });

  return (
    <div id="inner-container">
      <Navbar />
      <div id="main-content">
        <Cover image={project.image} width={position.width} height={position.height} left={position.left} top={position.top} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  position: state.position
});

Project.propTypes = {
  position: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired
  })
};

export default connect(mapStateToProps, null)(Project);
