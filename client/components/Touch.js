import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
  height: 50vh;
  color: #fff;
`;

const Title = styled.h1`
  color: #fff;
`;

const Line = styled.hr`
  width: 50px;
  border: 1px solid #fff;
`

const Description = styled.p`
  width: 65%;
  font-size: 18px;
  text-align: center;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
  text-align: center;
`;

const Phone = styled.div`
`;

const Email = styled.div`
`;

const Address = styled.div`
`;

const Touch = () => {
  return (
    <Footer>
      <Title>Let's Get In Touch!</Title>
      <Fade top delay={250} duration={1000}>
        <Line />
      </Fade>
      <Description>Ready to start your next project with me? That's great! Give me a call or send me an email and I will get back to you as soon as possible!</Description>
      <Contact>
        <Fade left delay={500} duration={1000}>
          <Phone className="contact">
            <i className="fa fa-phone fa-3x"></i>
            <p>123-456-6789</p>
          </Phone>
        </Fade>
        <Fade bottom delay={750} duration={1000}>
          <Email className="contact">
            <i className="fa fa-envelope-o fa-3x"></i>
            <p>
              <a href="mailto:junjie.chen18@gmail.com">feedback@personalportfolioboilerplate.com</a>
            </p>
          </Email>
        </Fade>
        <Fade right delay={1000} duration={1000}>
          <Address className="contact">
            <i className="fa fa-location-arrow fa-3x"></i>
            <p>Street<br />Apt/Suite/Unit/P.O. Box<br />City<br />State/Province/Region<br />ZIP</p>
          </Address>
        </Fade>
      </Contact>
    </Footer>
  );
}

export default Touch;
