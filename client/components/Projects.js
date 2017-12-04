import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const projects = [
  {
    id: 1,
    name: 'Project_1',
    image: 'images/project_1.jpg'
  },
  {
    id: 2,
    name: 'Project_2',
    image: 'images/project_2.jpg'
  },
  {
    id: 3,
    name: 'Project_3',
    image: 'images/project_3.jpg'
  },
  {
    id: 4,
    name: 'Project_4',
    image: 'images/project_4.jpg'
  },
  {
    id: 5,
    name: 'Project_5',
    image: 'images/project_5.jpg'
  },
  {
    id: 6,
    name: 'Project_6',
    image: 'images/project_6.jpg'
  },
  {
    id: 7,
    name: 'Project_7',
    image: 'images/project_7.jpg'
  },
  {
    id: 8,
    name: 'Project_8',
    image: 'images/project_8.jpg'
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

Projects.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default Projects;
