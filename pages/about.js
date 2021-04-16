import React from 'react';
import _ from 'lodash';

import Window from '../components/Window';
import Photo from '../components/Photo';
import Heading from '../components/Heading';

import Link from '../components/NextLink';
import { windows, work } from '../util/constants';
import '../main.scss';

const Experience = () => {
  const { about } = windows;
  const { twitch, splunk, zillow, hockeystick, properly, sunlife } = work;

  return (
    <Window {...about}>
      <div className="row m-0 justify-content-center">
        <div className="col d-none d-xl-flex">
          <Photo src="/static/alexgirardwaterfall.png" color={about.color} />
        </div>
        <div className="col d-flex align-items-center">
          <div>
            <Heading tag="h5">
              Hi, I’m Alexandra Girard! I’m a fourth year Software Engineering student at the 
              <Link href="https://uwaterloo.ca/" sb external>University of Waterloo</Link>. 
              I’m passionate about web development and human-computer interaction design.
            </Heading>
            <Heading tag="h5" mt="1.5rem">
              Previously, I’ve worked at <Link href={splunk.href} sb external>Splunk</Link>,
              <Link href={zillow.href} sb external>Zillow</Link>,
              <Link href={hockeystick.href} sb external>Hockeystick</Link>,
              <Link href={properly.href} sb sa external>Properly</Link> and
              <Link href={sunlife.href} sb sa external>Sun Life Financial.</Link>
              <Heading tag="span" color={about.color}>
                <b>
                  I’ll be joining <Link href={twitch.href} sb sa external>Twitch</Link>
                  this summer as a Software Engeering Intern.
                  {' '}
                  <img src="/static/bleed_purple.jpg" height="28" />
                </b>
              </Heading>
            </Heading>
            <Heading tag="h5" mt="1.5rem">
              In my free time I love to take hip hop classes, dabble in robotics, play 
              Minecraft, and drink too much coffee.
            </Heading>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default Experience;