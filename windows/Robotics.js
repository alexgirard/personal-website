import React from 'react';

import NextLink from '../components/NextLink';
import Window from '../components/Window';

const Robotics = props => (
  <Window maxWidth="700px" {...props}>
    <h3><NextLink href="https://www.uwvexu.ca/" external>UWAT Vex U Robotics</NextLink></h3>
    <p>Design, build and program autonomous and driver-controlled robots for competition. Check out our student design team website 
      {' '}<u><NextLink href="https://www.uwvexu.ca/" external>here</NextLink></u>.
    </p>

    <h3 className="pt-2">UW Biomechatronics</h3>
    <p>Design and create smart prosthetics for those in need by manipulating EMG data to trigger robotic limb movement.</p>
  </Window>
);

export default Robotics;
