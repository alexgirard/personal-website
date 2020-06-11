import React from 'react';

import Job from '../components/Job';

const Hockeystick = props => (
  <Job 
    bg="#2F9BFF"
    link="https://www.hockeystick.co/"
    src="/static/hockeystick.png"
    alt="Hockeystick logo"
    company="Hockeystick"
    role="Front End Developer"
    desc="Exclusive database which lets you track companies, investments and trends in the tech ecosystem."
    {...props}
  />
);

export default Hockeystick;
