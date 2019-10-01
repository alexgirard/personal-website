import React from 'react';
import styled from 'styled-components';
import { FlexContainer, yellow } from './Styles';
import RecordPlayer from './RecordPlayer';

const Background = styled(FlexContainer)`
  margin: 4rem 0;
  justify-content: center;
`;

class Hero extends React.Component {
  state = {
    token: "",
    deviceId: "",
    loggedIn: false,
    error: "",
    trackName: "Track Name",
    artistName: "Artist Name",
    playing: false,
    position: 0,
    duration: 0,
  };

  getNowPlaying(){
    const { spotifyApi } = this.props;

    spotifyApi.getMyCurrentPlaybackState().then((response) => {
      this.setState({
        trackName: response.item.name,
        artistName: response.item.artist,
      });
    });
  }

  onPlayClick() {
    const { spotifyApi } = this.props;
    spotifyApi.play();
  }

  onPauseClick() {
    const { spotifyApi } = this.props;
    spotifyApi.pause();
  }

  onPrevClick() {
    const { spotifyApi } = this.props;
    spotifyApi.skipToPrev();
  }

  onNextClick() {
    const { spotifyApi } = this.props;
    spotifyApi.skipToNext();
  }

  render() {
    const { token, playing, trackName, artistName } = this.state;


    return (
      <Background>
        <RecordPlayer />
        <iframe src="https://open.spotify.com/embed/playlist/45HcC9YjCzw8OdnDLyeHAM?si=JJmKWHb_TmqMG5zcKCjIRA&theme=white" width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
        <svg width="1em" height="1em" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid" >
          <path d="M119.351 64L8.65 0v128z" fill="black" />
        </svg>
        <p>{trackName}</p>
        <p>{artistName}</p>
        <button onClick={() => this.onPrevClick()}>Previous</button>
        <button onClick={() => this.onPlayClick()}>{playing ? "Pause" : "Play"}</button>
        <button onClick={() => this.onNextClick()}>Next</button>
      </Background>
    );
  }
};

export default Hero;
