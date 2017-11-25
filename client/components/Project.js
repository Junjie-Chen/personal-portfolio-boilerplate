import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Cover from './Cover';

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

const Container = styled.div`
`;

const Content = styled.div`
`;

const Project = props => {
  const { id } = props.match.params;
  const { position } = props;

  const project = projects.find(project => {
    return project.id === Number(id);
  });

  return (
    <Container id="inner-container">
      <Navbar />
      <Content id="main-content">
        <Cover image={project.image} width={position.width} height={position.height} left={position.left} top={position.top} />
      </Content>
    </Container>
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
