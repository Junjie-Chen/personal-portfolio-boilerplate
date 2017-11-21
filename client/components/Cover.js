import React from 'react';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

const Image = styled.img`
  position: absolute;
  padding-left: 5px;
  padding-right: 5px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
`;

const getWindowWidth = () => {
  const navbar = document.getElementById('main-content');
  return navbar.clientWidth;
}

const Cover = ({image, width, height, left, top}) => {
  return (
    <Motion defaultStyle={{width: width, height: height, left: left, top: top}} style={{width: spring(getWindowWidth()), height: spring(400), left: spring(0), top: spring(0)}}>
      {interpolatingStyle => <Image src={image} width={interpolatingStyle.width} height={interpolatingStyle.height} left={interpolatingStyle.left} top={interpolatingStyle.top} />}
    </Motion>
  );
}

export default Cover;
