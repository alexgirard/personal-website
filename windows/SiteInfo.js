import React from 'react';

import NextLink from '../components/NextLink';
import Window from '../components/Window';

const SiteInfo = props => (
  <Window maxWidth="400px" {...props}>
    This design for this site took inspiration from the 
    {' '}<NextLink href="https://www.apple.com/" external><u>Classic Mac OS</u></NextLink>{' '}
    and was built using 
    {' '}<NextLink href="https://nextjs.org/" external><u>Next.js</u></NextLink>
    . The source code can be found 
    {' '}<NextLink href="https://github.com/alexgirard/alexgirard" external><u>here</u></NextLink>.
  </Window>
);

export default SiteInfo;
