import React, {Component} from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import styled from 'styled-components';
import Navbar from './Navbar';

const colors = [
  '#F1F8E9',
  '#DCEDC8',
  '#C5E1A5',
  '#AED581',
  '#9CCC65',
  '#8BC34A'
];

const Container = styled.div`
`;

const Content = styled.div`
  height: calc(126vh - 100px);
  padding: 5px;
`;

const Parent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Background = styled.div`
  flex: 0 1 ${props => props.width}%;
  border: ${props => props.border}px solid #fff;
  background-color: ${props => props.background};
`;

const Wrapper = styled.div`
  flex: 0 1 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.background};
  color: #fff;
`;

const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  padding-left: 25px;
  padding-right: 25px;
  font-size: 24px;
`;

const Link = styled.a`
  color: inherit;
`;

class About extends Component {
  constructor() {
    super();

    this.state = {
      animation: false
    };

    setTimeout(() => {
      this.setState({
        animation: true
      });
    }, 500);
  }

  render() {
    return (
      <Container id="inner-container">
        <Navbar />
        <Content>
          <StaggeredMotion defaultStyles={[{width: 100, border: 1}, {width: 100, border: 1}, {width: 100, border: 1}, {width: 100, border: 1}, {width: 100, border: 1}, {width: 100, border: 1}]} styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0 ?
            {width: spring(this.state.animation ? 0 : 100), border: spring(this.state.animation ? 0 : 1)} :
            {width: spring(prevInterpolatedStyles[i - 1].width), border: spring(prevInterpolatedStyles[i - 1].border)}
          })}>
          {interpolatingStyles =>
            <Parent>
            {interpolatingStyles.map((style, i) =>
              <Background key={i} width={style.width} border={style.border} background={colors[i]} />
            )}
              <Wrapper background={colors[5]}>
              {interpolatingStyles[3].width < 25 &&
                <div>
                  <Title>About Me</Title>
                  <Paragraph>Hi, I'm Junjie. I'm originally from Shanghai, and currently lives in New York.<br /><br />I'm a teaching fellow at <Link href="https://www.fullstackacademy.com" target="_blank">Fullstack Academy</Link>, a top ranked coding bootcamp in the U.S. I recently graduated from there. My career interest lies in front-end web development, so I use any opportunity given to sharpen my skills in JavaScript, HTML and CSS.<br /><br />When you find me not coding, I'm music streaming on Spotify, crafting poetry on Notes, and seeking stylish products in music, tech and fashion industry.</Paragraph>
                </div>
              }
              </Wrapper>
            </Parent>
          }
          </StaggeredMotion>
        </Content>
      </Container>
    );
  }
}

export default About;
