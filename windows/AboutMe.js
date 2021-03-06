import React from 'react';
import _ from 'lodash';

import NextLink from '../components/NextLink';
import Window from '../components/Window';

const Open = ({ openTab, title, name, children }) => <u><button onClick={e => { e.stopPropagation(); openTab(title);}}>{children || name}</button></u>

const AboutMe = ({ openTab, workData, extraData, ...props}) => {
  const [zillow, hockeystick, properly, sunlife] = workData;
  const [robotics, dance, site] = extraData;

  return (
    <Window {...props}>
      <div className="d-flex flex-md-nowrap flex-wrap justify-content-center align-items-center px-2">
        <img src="/static/profile_photo.png" alt="profile photo" className="pl-md-2 pr-md-4" />
        <div className="pl-md-2 pt-3 pt-md-0">
          <p>
            Hi, I’m Alexandra Girard! I’m a fourth year Software Engineering student at the
            {' '} <u><NextLink href="https://uwaterloo.ca/" external>University of Waterloo.</NextLink></u> {' '}
            I’m passionate about web development and human-computer interaction design.
          </p>

          <p>I most recently interned as a Software Engineer at Splunk; previously, I've interned at <Open openTab={openTab} {...zillow}/>, <Open openTab={openTab} {...hockeystick}/>, <Open openTab={openTab} {...properly}/>, and <Open openTab={openTab} {...sunlife}/>.</p>
          <p className="m-0">In my free time I love to take <Open openTab={openTab} {...dance}>hip hop classes</Open>, dabble in <Open openTab={openTab} {...robotics}>robotics</Open>, play Minecraft, and drink way too much coffee.</p>
        </div>
      </div>
    </Window>
  );
};

export default AboutMe;
