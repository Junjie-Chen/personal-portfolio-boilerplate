import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { logout } from '../store';

const Container = styled.div`
`;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: calc(126vh - 100px);
  padding: 5px;
  background-color: #FF7043;
`;

const Wrapper = styled.div`
`;

const Link = styled.a`
  display: block;
  width: 100%;
  margin-top: 20px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #42A5F5;
  }
`;

const Item = styled.h1`
  color: #fff;
`;

class Music extends Component {
  constructor() {
    super();

    this.state = {
      playlists: {}
    };
  }

  render() {
    const { loggedIn, accessToken, handleClick } = this.props;

    if (loggedIn && !this.state.playlists.href) {
      axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {Authorization: `Bearer ${accessToken}`}
      })
      .then(res => res.data)
      .then(playlists => {
        this.setState({
          playlists
        })
      })
      .catch(console.error);
    }

    console.log('playlists: ', this.state.playlists);

    return (
      <Container id="inner-container">
        <Navbar />
        <Content>
        {
          loggedIn ?
          <Wrapper>
            <Link href="#" onClick={handleClick}>Log out</Link>
            <Item>My Playlists on Spotify</Item>
          </Wrapper> :
          <Wrapper>
            <Link href="/auth/spotify">Log in with Spotify</Link>
          </Wrapper>
        }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.user.id,
  accessToken: state.user.spotifyAccessToken
})

const mapDispatchToProps = dispatch => ({
  handleClick(event) {
    event.preventDefault();

    dispatch(logout());
  }
})

Music.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  accessToken: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Music);
