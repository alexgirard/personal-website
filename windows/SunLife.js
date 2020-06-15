import React from 'react';

import Job from '../components/Job';

const SunLife = props => (
  <Job
    link="https://www.sunlife.ca/en/"
    src="/static/sun_life_financial.png"
    alt="Sun Life logo"
    company="Sun Life Financial"
    role="Application Developer"
    desc="Banking services to help Canadians achieve lifetime financial security."
    {...props}
  />
);

export default SunLife;
