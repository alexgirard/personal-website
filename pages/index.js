import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import Heading from '../components/Heading';
import { TextFrame, PictureFrame } from '../components/Frame';
import PageTemplate from '../components/PageTemplate';

import '../main.scss';

const OutlinedText = styled(Heading)`
  -webkit-text-stroke: 2px black;
  @media (max-width: 576px) { -webkit-text-stroke: 1.5px black; }
`;

const AbsOutlined = styled(OutlinedText)`
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: -1;
  user-select: none;
  @media (max-width: 576px) {
    left: 3px;
    top: 3px;
  }
`;

const OutlinedDoubleTitle = (props) => (
  <div style={{ position: 'relative'}}>
    <OutlinedText fontWeight="600" tag="h1" color="white" ml={props.ml}>{props.children}</OutlinedText>
    <AbsOutlined fontWeight="600" tag="h1" color="white" ml={props.ml}>{props.children}</AbsOutlined>
  </div>
)

const Title = (
  <div className="d-flex flex-wrap">
    <OutlinedDoubleTitle>Hi,&#160;</OutlinedDoubleTitle>
    <OutlinedDoubleTitle>I'm&#160;</OutlinedDoubleTitle>
    <OutlinedDoubleTitle>Alex</OutlinedDoubleTitle>
  </div>
)

const StyledLink = styled.a`
  :hover {
    color: #6441a5 !important;
  }
`;

const ImageWrapper = styled.div`
  padding-left: 5em;
  @media (min-width: 1000px) and (max-width: 1220px) { padding-left: 0rem; }
  @media (min-width: 769px) and (max-width: 1000px) { padding-left: 0rem; }
  @media (max-width: 768px) { display: none; }
`;

const Grid = styled.div`
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Index = () => {

  return (
    <PageTemplate curPage="/">
      <Grid
        className="m-5"
        style={{
          height: '60vh',
          display: 'grid',
          gap: '3em',
          maxWidth: '66em'
        }}
      >
        <ImageWrapper className="w-100 h-100">
          <PictureFrame
            bg="#FBC12E"
            fg="url('/static/pics/alex_hat.jpg') no-repeat 50% 25%/cover"
            maxWidth="400px"
          />
        </ImageWrapper>
        <div className="d-flex flex-column justify-content-center">
          {Title}
          <Heading fontFamily="Manier" tag="h2" mt="1em">
            I’m a San Francisco-based software engineer currently 
            {' '}
            <span style={{ whiteSpace: "nowrap" }}>
              @
              {' '}
              <StyledLink href="https://www.twitch.tv/" external>
                Twitch
              </StyledLink>
            </span>
          </Heading>
        </div>
      </Grid>
    </PageTemplate>
  );
};

export default Index;