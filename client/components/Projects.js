import React from 'react';
import { NavLink } from 'react-router-dom';

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

const Projects = ({handleClick}) => {
  return (
    <div id="main-content">
    {
      projects.map(project => {
        return (
          <div className="item" key={project.id}>
            <NavLink to={`/project/${project.id}`}>
              <img src={project.image} alt={project.name} onClick={handleClick} />
            </NavLink>
          </div>
        );
      })
    }
    </div>
  );
}

export default Projects;
