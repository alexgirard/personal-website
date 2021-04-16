import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import Window from '../components/Window';
import Heading from '../components/Heading';

import Link from '../components/NextLink';
import { windows } from '../util/constants';
import '../main.scss';
import Photo from '../components/Photo';

const extras = [
  {
    title: '💃 Dance',
    src: 'https://www.youtube.com/watch?v=9Puns-8uXE4',
    video: true,
    paragraph: <>I’ve danced competitvely in the styles ballet, pointe, contemporary, lyrical, jazz and hip hop. Throughout university I’ve joined a female hip hop group, taught at a dance workshop, and attended hip hop classes in between school.</>,
    desc: 'Above is a video of my group Femi9’s set from BYOB Dance Competition 2018.',
  },
  {
    title: '🤖 Robotics',
    src: '/static/robotics.jpg',
    paragraph: <>Some friends and I started the <Link href="https://www.uwvexu.ca/" external>UWAT VEX U Robotics</Link> student design team at our university. We design, build and program autonomous and driver-controlled robots to compete at the VEX U World Championships.</>,
    desc: 'Above is a photo of our two robots before competiton 2020.',
  }
];

const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 8rem;

  @media (max-width: 1100px) {
    grid-template-columns: 100%;
    grid-gap: 3rem;
  }

  @media (max-width: 576px) {
    grid-gap: 2rem;
  }
`;

// TODO:
// - fix image cropping => should crop images?? maxheight?? 
// - fix window overflow scroll
// - add fadein/fadeout effects
// - add arrows to different pages

const Extra = () => {
  const { extra } = windows;
  
  return (
    <Window {...extra}>
      <Grid>
        {_.map(extras, ({ title, src, video, paragraph, desc }) => (
          <div key={title}>
            <Heading tag="h3" mb="1rem">{title}</Heading>
            <Photo src={src} color={extra.color} video={video} />
            <Heading tag="p" mt="1.5rem">
              {paragraph}
              {' '}
              <Heading tag="span" color={extra.color}>
                <b>{desc}</b>
              </Heading>
            </Heading>
          </div>
        ))}
      </Grid>
    </Window>
  );
};

export default Extra;