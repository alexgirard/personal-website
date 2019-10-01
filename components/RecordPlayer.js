import React from 'react';
import styled from 'styled-components';
import RotatingRecord from './RotatingRecord';
import MusicNotes from './MusicNotes';

const RecordPlayerWrapper = styled.div`
  width: 300px;
  position: relative;
`;

const Tonearm = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const NotesWrapper = styled.div`
  position: relative;
  width: 350px;
`;

const Notes = styled.div`
  position: absolute;
  top: -2rem;
  right: 0;
`;


class RecordPlayer extends React.Component {
  state = { showNotes: true };

  showMusicNotes() {
    this.setState({ showNotes: true });
  }

  hideMusicNotes() {
    this.setState({ showNotes: false });
  }

  render() {
    const { showNotes } = this.state;

    return (
      <NotesWrapper>
        <RecordPlayerWrapper onMouseEnter={() => this.showMusicNotes()} onClick={() => this.showMusicNotes()}>
          <RotatingRecord />
          <Tonearm>
            <svg viewBox="0 0 8.4666665 10.583333625" height="300px">
              <g transform="translate(-3.5,-289)">
                <path
                  style={{color: 'black', fontSize: 'medium', textDecorationColor: 'black', clipRule: 'nonzero', display: 'inline', overflow: 'visible', opacity: 1, fill: 'black', fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.26458335}}
                  d="m 7.5390625,294.88477 a 0.13230489,0.13230489 0 0 0 -0.1308594,0.13476 l 0,0.45899 a 0.1328125,0.1328125 0 0 0 0.265625,0 l 0,-0.45899 a 0.13230489,0.13230489 0 0 0 -0.1347656,-0.13476 z"
                />
                <path
                  style={{color: 'black', fontSize: 'medium', textDecorationColor: 'black', clipRule: 'nonzero', display: 'inline', overflow: 'visible', opacity: 1, fill: 'black', fillRule: 'nonzero', stroke: 'none', strokeWidth: 0.26458335}}
                  d="m 7.2636719,294.22266 a 0.13230489,0.13230489 0 0 0 -0.1191407,0.13086 l 0,0.6621 a 0.13230489,0.13230489 0 0 0 0.1308594,0.13282 l 0.5292969,0 A 0.13230489,0.13230489 0 0 0 7.9375,295.01562 l 0,-0.6621 a 0.13230489,0.13230489 0 0 0 -0.1328125,-0.13086 l -0.5292969,0 a 0.13230489,0.13230489 0 0 0 -0.011719,0 z m 0.1445312,0.26367 0.265625,0 0,0.39648 -0.265625,0 0,-0.39648 z"
                />
                <path
                  style={{color: 'black', fontSize: 'medium', textDecorationColor: 'black', clipRule: 'nonzero', display: 'inline', overflow: 'visible', opacity: 1, fill: 'black', fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.26458335}}
                  d="m 6.8652344,290.25195 a 0.1323049,0.1323049 0 0 0 -0.078125,0.22657 l 0.6210937,0.62304 0,3.15235 a 0.1328125,0.1328125 0 0 0 0.265625,0 l 0,-3.20703 a 0.1323049,0.1323049 0 0 0 -0.039063,-0.0938 l -0.6601562,-0.66015 a 0.1323049,0.1323049 0 0 0 -0.109375,-0.041 z"
                />
              </g>
            </svg>
          </Tonearm>
        </RecordPlayerWrapper>
        {showNotes && <Notes><MusicNotes animationEnd={() => this.hideMusicNotes()} /></Notes>}
      </NotesWrapper>
    );
  }
};

export default RecordPlayer;
