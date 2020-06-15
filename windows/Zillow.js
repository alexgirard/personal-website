import React from 'react';

import Job from '../components/Job';

const Zillow = props => (
  <Job
    link="https://www.zillow.com/"
    src="/static/zillow.png"
    alt="Zillow logo"
    company="Zillow"
    role="Software Developer"
    desc="Real estate and rental marketplace dedicated to empowering consumers with data, inspiration and knowledge around the place they call home."
    {...props}
  />
);

export default Zillow;
