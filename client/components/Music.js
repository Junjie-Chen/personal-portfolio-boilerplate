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
  background-color: #FF7043;
`;

const Parent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Link = styled.a`
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  font-size: 30px;
  text-decoration: none;

  &:hover {
    color: #42A5F5;
  }
`;

const Title = styled.h1`
  flex: 0 1 100%;
  margin-top: 0;
  margin-bottom: 25px;
  color: #fff;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Item = styled.iframe`
  flex: 1 1 calc(25% - 10px);
  margin: 5px;
`;

class Music extends Component {
  constructor() {
    super();

    this.state = {
      playlists: []
    };
  }

  render() {
    const { loggedIn, accessToken, handleClick } = this.props;

    if (loggedIn && !this.state.playlists.length) {
      axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {Authorization: `Bearer ${accessToken}`}
      })
      .then(res => res.data)
      .then(playlists => {
        this.setState({
          playlists: playlists.items
        });
      })
      .catch(console.error);
    }

    return (
      <Container id="inner-container">
        <Navbar />
        <Content>
          <Parent>
          {
            loggedIn ?
            <Link href="#" onClick={handleClick}>Log out</Link> :
            <Link href="/auth/spotify">Log in with Spotify</Link>
          }
          {
            loggedIn &&
            <Title>My Playlists on Spotify</Title>
          }
          </Parent>
        {
          loggedIn &&
          <Wrapper>
          {
            this.state.playlists.map(playlist => {
              return (
                <Item key={playlist.id} src={playlist.external_urls.spotify.slice(0, 25) + 'embed/' + playlist.external_urls.spotify.slice(25)} height="380" frameBorder="0" allowTransparency="true"></Item>
              )
            })
          }
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
