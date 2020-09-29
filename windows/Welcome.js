import React from 'react';

import Window from '../components/Window';

const welcomeMessage = isMobile => isMobile
  ? "Welcome! To navigate this site treat it as you would your mobile OS (click apps to open, click home to return to home screen)."
  : "Welcome! To navigate this site treat it as you would your computer desktop (double click desktop icons, drag windows around, etc).";

const Welcome = ({ isMobile, ...props }) => (
  <Window maxWidth="520px" {...props}>
    {welcomeMessage(isMobile)}
  </Window>
);

export default Welcome;
