import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import Heading from '../components/Heading';
import { TextFrame, PictureFrame } from '../components/Frame';
import PageTemplate from '../components/PageTemplate';

import '../main.scss';

const StyledLink = styled.a`
  :hover {
    color: #F2C531 !important;
  }
`;

const Grid = styled.div`
  display: grid;
  max-width: 66em;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4em; 

  @media (min-width: 941px) and (max-width: 1100px) { gap: 4em; }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    gap: 3em;

    div:nth-of-type(3) { order: 4; }
    div:nth-of-type(4) { order: 3; }
  }
`;

const About = () => {

  return (
    <PageTemplate curPage="about">
      <Heading fontFamily="Manier" tag="h2" className="mb-4 mb-md-5">About Me</Heading>
      <Grid className="pb-4">
        <TextFrame maxWidth="100%" h="100%" hOverride>
          <p>
            Hi, I’m Alexandra Girard! I just graduated from the 
            {' '}
            <StyledLink href="https://uwaterloo.ca/" external>
              University of Waterloo
            </StyledLink>
            {' '}
            with a degree in Software Engineering and specialization 
            in human-computer interaction.
          </p>
        </TextFrame>
        <PictureFrame
          bg="#F12386"
          fg="url('/static/pics/alex_museum.jpg') no-repeat 50% 40%/cover"
          minHeight="300px"
          maxWidth="100%"
        />
        <PictureFrame
          bg="#38D1D1"
          fg="url('/static/pics/alex_sf.jpg') no-repeat 50% 35%/cover"
          minHeight="300px"
          maxWidth="100%"
        />
        <TextFrame maxWidth="100%" h="100%" hOverride>
          <p>
            When I’m not coding, you can find me taking contemporary 
            or hip hop drop-in dance classes, playing Valorant or Minecraft with friends, 
            or drinking way too much coffee ☕
          </p>
        </TextFrame>
      </Grid>
    </PageTemplate>
  );
};

export default About;