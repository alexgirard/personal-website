import React from 'react';
import _ from 'lodash';

import Window from '../components/Window';
import Photo from '../components/Photo';
import Heading from '../components/Heading';
import Container from '../components/Container';

import { windows } from '../util/constants';
import '../main.scss';

const Index = () => {
  const { home } = windows;
  const { color, textColor } = home;

  return (
    <Window maxWidth="550px" {...home}>
      <Container mb="0.5rem">
        <Heading tag="h3">👋 Hi, I'm Alex</Heading>
      </Container>
      <Photo src="/static/alexgirardpurple.png" color={color} maxWidth={550} />
      <Heading tag="p" mt="1rem" color={textColor || color}>
        I’m a <b>Software Engineering Intern @ Splunk</b>, dancer, robotics nerd, Minecraft gamer & coffee addict.
      </Heading>
    </Window>
  );
};

export default Index;