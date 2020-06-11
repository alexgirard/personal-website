import React from 'react';

import Job from '../components/Job';

const Properly = props => (
  <Job 
    bg="#1C7473"
    link="https://www.properly.ca/"
    src="/static/properly.png"
    alt="Properly logo"
    company="Properly"
    role="Full Stack Developer"
    desc="Provides Canadians with a fast, simple and easy way to sell their home."
    {...props}
  />
);

export default Properly;
