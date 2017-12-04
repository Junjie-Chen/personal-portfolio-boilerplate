import React from 'react';
import { connect } from 'react-redux';
import ReactMapboxGl, { Layer, Feature, Popup, ZoomControl, ScaleControl, RotationControl } from 'react-mapbox-gl';
import styled from 'styled-components';
import Navbar from './Navbar';
import Touch from './Touch';
import { showPopup } from '../store';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoianVuamllLWNoZW4xOCIsImEiOiJjajY4ODVmd3UwY3pxMnhsN3E4b2xjcGZ3In0.kSuxQNxfxbUTAtsemUP28g'
});

const image = new Image(30, 30);
image.src = 'images/fullstack.png';

const images = ['fullstack', image];

const handleHover = (map, cursor) => {
  map.getCanvas().style.cursor = cursor;
};

const Container = styled.div`
`;

const Content = styled.div`
  height: calc(100% - 100px);
  padding: 5px;
`;

const StyledPopup = styled.div`
  max-width: 600px;
  background: white;
  padding: 5px;
  border-radius: 2px;
`;

const Name = styled.h5`
`;

const Description = styled.div`
  color: #3F618C;
  font-weight: 400;
`;

const Anchor = styled.a`
  text-decoration: underline;
`;

const Contact = ({ popup, showPopup }) => {
  return (
    <Container id="inner-container">
      <Navbar />
      <Content>
        <Map
          style="mapbox://styles/mapbox/streets-v8"
          center={[-74.009151, 40.705086]}
          zoom={[12]}
          bearing={20}
          pitch={35}
          containerStyle={{
            width: '100%',
            height: '50vh'
          }}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ 'icon-image': 'fullstack' }}
            images={images}>
            <Feature
              coordinates={[-74.009151, 40.705086]}
              onMouseEnter={mapWithEvt => handleHover(mapWithEvt.map, 'pointer')}
              onMouseLeave={mapWithEvt => handleHover(mapWithEvt.map, '')}
              onClick={showPopup} />
          </Layer>
          {
            popup && (
            <Popup
              coordinates={[-74.009151, 40.705086]}
              anchor="bottom"
              offset={20}
              onClick={showPopup}>
              <StyledPopup>
                <Name>Fullstack Academy</Name>
                <Description><Anchor href="https://www.fullstackacademy.com" target="_blank">Fullstack Academy</Anchor> is an immersive software engineering coding bootcamp located in New York City and Chicago. Students of the full-time flagship course learn full stack JavaScript over the course of a 13-week, on-campus program. Fullstack Academy offers beginner courses in Javascript (JavaScript Jumpstart) and front-end development, as well as a summer program for college-age students (Summer of Code), and a part-time version of their full-time curriculum (Flex).</Description>
              </StyledPopup>
            </Popup>
          )
        }
        <ZoomControl zoomDiff={1} />
        <ScaleControl />
        <RotationControl />
        </Map>
        <Touch />
      </Content>
    </Container>
  );
}

const mapStateToProps = state => ({
  popup: state.popup
})

const mapDispatchToProps = dispatch => ({
  showPopup() {
    dispatch(showPopup());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
